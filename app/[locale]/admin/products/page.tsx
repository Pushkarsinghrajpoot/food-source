'use client'

import { useState, useEffect } from 'react'
import { 
  Save, RefreshCw, Plus, Trash2, Eye, Edit3, ChevronDown, ChevronUp, 
  Upload, X, Check, AlertCircle, Package, Search, Filter
} from 'lucide-react'

interface NutritionItem {
  nutrient: string
  amount: string
  daily_value: string | null
}

interface Product {
  id?: string
  name: string
  category: string
  size: string
  shelf_life: string
  barcode: string
  image_url: string
  description: string
  storage: string
  shelf_life_detail: string
  origin: string
  nutrition: NutritionItem[]
  created_at?: string
  updated_at?: string
}

const emptyProduct: Product = {
  name: '',
  category: 'cheeses',
  size: '',
  shelf_life: '',
  barcode: '',
  image_url: '',
  description: '',
  storage: '',
  shelf_life_detail: '',
  origin: '',
  nutrition: []
}

const categories = ['cheeses', 'olives', 'dairy', 'pickles', 'labneh', 'uncategorized']

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [seeding, setSeeding] = useState(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [showBulkActions, setShowBulkActions] = useState(false)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [bulkCategory, setBulkCategory] = useState('')
  const [expandedNutrition, setExpandedNutrition] = useState(false)
  const [mode, setMode] = useState<'list' | 'edit' | 'preview' | 'add'>('list')

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      if (data.products) {
        setProducts(data.products)
      } else {
        setNotification({ type: 'error', message: data.error || 'Failed to fetch products' })
      }
    } catch (err: any) {
      setNotification({ type: 'error', message: 'Failed to fetch products' })
    }
    setLoading(false)
  }

  const seedDatabase = async () => {
    setSeeding(true)
    try {
      const res = await fetch('/api/products/seed', { method: 'POST' })
      const data = await res.json()
      if (data.products) {
        setNotification({ type: 'success', message: data.message })
        fetchProducts()
      } else {
        setNotification({ type: 'error', message: data.error || 'Seed failed' })
      }
    } catch (err: any) {
      setNotification({ type: 'error', message: 'Seed failed' })
    }
    setSeeding(false)
  }

  const saveProduct = async (product: Product) => {
    setSaving(true)
    try {
      if (product.id) {
        const { id, created_at, updated_at, ...updateData } = product
        const res = await fetch(`/api/products/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateData)
        })
        const data = await res.json()
        if (data.product) {
          setNotification({ type: 'success', message: `"${product.name}" updated successfully` })
          fetchProducts()
          setMode('list')
          setEditingProduct(null)
        } else {
          setNotification({ type: 'error', message: data.error || 'Update failed' })
        }
      } else {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        })
        const data = await res.json()
        if (data.product) {
          setNotification({ type: 'success', message: `"${product.name}" created successfully` })
          fetchProducts()
          setMode('list')
          setEditingProduct(null)
        } else {
          setNotification({ type: 'error', message: data.error || 'Create failed' })
        }
      }
    } catch (err: any) {
      setNotification({ type: 'error', message: 'Save failed' })
    }
    setSaving(false)
  }

  const deleteProduct = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.message) {
        setNotification({ type: 'success', message: `"${name}" deleted` })
        fetchProducts()
      } else {
        setNotification({ type: 'error', message: data.error || 'Delete failed' })
      }
    } catch {
      setNotification({ type: 'error', message: 'Delete failed' })
    }
  }

  const bulkUpdateCategory = async () => {
    if (!bulkCategory || selectedIds.size === 0) return
    setSaving(true)
    try {
      const updates = Array.from(selectedIds).map(id => ({ id, category: bulkCategory }))
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: updates })
      })
      const data = await res.json()
      setNotification({ type: 'success', message: data.message })
      fetchProducts()
      setSelectedIds(new Set())
      setBulkCategory('')
    } catch {
      setNotification({ type: 'error', message: 'Bulk update failed' })
    }
    setSaving(false)
  }

  const filteredProducts = products
    .filter(p => filterCategory === 'all' || p.category === filterCategory)
    .filter(p =>
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.barcode?.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const toggleSelect = (id: string) => {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelectedIds(next)
  }

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredProducts.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filteredProducts.map(p => p.id!)))
    }
  }

  // ─── RENDER ────────────────────────────────────────────────
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 animate-fade-in">
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white text-sm font-medium"
            style={{ backgroundColor: notification.type === 'success' ? '#16a34a' : '#dc2626' }}
          >
            {notification.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
            {notification.message}
            <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-70">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
            <p className="text-gray-500 mt-1">{products.length} products in database</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={seedDatabase}
              disabled={seeding}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors disabled:opacity-50"
            >
              <Upload size={16} />
              {seeding ? 'Seeding...' : 'Seed from XLSX'}
            </button>
            <button
              onClick={() => { setEditingProduct({ ...emptyProduct }); setMode('add') }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <Plus size={16} />
              Add Product
            </button>
          </div>
        </div>

        {/* Edit / Add Mode */}
        {(mode === 'edit' || mode === 'add') && editingProduct && (
          <ProductForm
            product={editingProduct}
            onSave={saveProduct}
            onCancel={() => { setEditingProduct(null); setMode('list') }}
            onPreview={(p) => { setPreviewProduct(p); setMode('preview') }}
            saving={saving}
            expandedNutrition={expandedNutrition}
            setExpandedNutrition={setExpandedNutrition}
          />
        )}

        {/* Preview Mode */}
        {mode === 'preview' && previewProduct && (
          <ProductPreview
            product={previewProduct}
            onBack={() => setMode(editingProduct?.id ? 'edit' : 'add')}
            onEdit={() => setMode(editingProduct?.id ? 'edit' : 'add')}
          />
        )}

        {/* List Mode */}
        {mode === 'list' && (
          <>
            {/* Search & Filter Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search products by name or barcode..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Filter size={16} className="text-gray-400" />
                  <select
                    value={filterCategory}
                    onChange={e => setFilterCategory(e.target.value)}
                    className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(c => (
                      <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => setShowBulkActions(!showBulkActions)}
                    className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm hover:bg-gray-50 transition-colors"
                  >
                    Bulk Actions
                  </button>
                  <button
                    onClick={fetchProducts}
                    className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <RefreshCw size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Bulk Actions Bar */}
              {showBulkActions && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={selectedIds.size === filteredProducts.length && filteredProducts.length > 0}
                      onChange={toggleSelectAll}
                      className="rounded"
                    />
                    Select All ({selectedIds.size} selected)
                  </label>
                  <select
                    value={bulkCategory}
                    onChange={e => setBulkCategory(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
                  >
                    <option value="">Change category to...</option>
                    {categories.map(c => (
                      <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                    ))}
                  </select>
                  <button
                    onClick={bulkUpdateCategory}
                    disabled={!bulkCategory || selectedIds.size === 0 || saving}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-50 hover:bg-blue-700 transition-colors"
                  >
                    {saving ? 'Updating...' : 'Apply Bulk Update'}
                  </button>
                </div>
              )}
            </div>

            {/* Products Table */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <RefreshCw className="animate-spin text-gray-400" size={32} />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <Package size={48} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 text-sm mb-6">
                  {products.length === 0
                    ? 'Seed the database from XLSX data to get started.'
                    : 'Try adjusting your search or filter.'}
                </p>
                {products.length === 0 && (
                  <button
                    onClick={seedDatabase}
                    disabled={seeding}
                    className="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors disabled:opacity-50"
                  >
                    {seeding ? 'Seeding...' : 'Seed Database'}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        {showBulkActions && <th className="px-4 py-3 text-left w-10"></th>}
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Image</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Product</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Size</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Barcode</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Shelf Life</th>
                        <th className="px-4 py-3 text-right font-semibold text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          {showBulkActions && (
                            <td className="px-4 py-3">
                              <input
                                type="checkbox"
                                checked={selectedIds.has(product.id!)}
                                onChange={() => toggleSelect(product.id!)}
                                className="rounded"
                              />
                            </td>
                          )}
                          <td className="px-4 py-3">
                            {product.image_url ? (
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                                <img
                                  src={product.image_url}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                <Package size={20} className="text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-gray-900">{product.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5 truncate max-w-[200px]">
                              {product.description?.substring(0, 60)}...
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600">{product.size}</td>
                          <td className="px-4 py-3 text-gray-600 font-mono text-xs">{product.barcode}</td>
                          <td className="px-4 py-3 text-gray-600">{product.shelf_life}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => { setPreviewProduct(product); setEditingProduct(product); setMode('preview') }}
                                className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                                title="Preview"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                onClick={() => { setEditingProduct({ ...product }); setMode('edit') }}
                                className="p-2 rounded-lg hover:bg-amber-50 text-amber-600 transition-colors"
                                title="Edit"
                              >
                                <Edit3 size={16} />
                              </button>
                              <button
                                onClick={() => deleteProduct(product.id!, product.name)}
                                className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// ─── PRODUCT FORM COMPONENT ──────────────────────────────────
function ProductForm({
  product,
  onSave,
  onCancel,
  onPreview,
  saving,
  expandedNutrition,
  setExpandedNutrition,
}: {
  product: Product
  onSave: (p: Product) => void
  onCancel: () => void
  onPreview: (p: Product) => void
  saving: boolean
  expandedNutrition: boolean
  setExpandedNutrition: (v: boolean) => void
}) {
  const [form, setForm] = useState<Product>(product)

  const updateField = (field: keyof Product, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const addNutrition = () => {
    setForm(prev => ({
      ...prev,
      nutrition: [...prev.nutrition, { nutrient: '', amount: '', daily_value: null }]
    }))
  }

  const updateNutrition = (index: number, field: keyof NutritionItem, value: string | null) => {
    setForm(prev => ({
      ...prev,
      nutrition: prev.nutrition.map((n, i) => i === index ? { ...n, [field]: value } : n)
    }))
  }

  const removeNutrition = (index: number) => {
    setForm(prev => ({
      ...prev,
      nutrition: prev.nutrition.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-900">
          {product.id ? `Edit: ${product.name}` : 'Add New Product'}
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onPreview(form)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
          >
            <Eye size={16} />
            Preview
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <X size={16} />
            Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={e => updateField('name', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm"
              placeholder="e.g. White Cheese, Lightly Salted"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label>
              <select
                value={form.category}
                onChange={e => updateField('category', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm"
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Size</label>
              <input
                type="text"
                value={form.size || ''}
                onChange={e => updateField('size', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm"
                placeholder="e.g. 10 kg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Barcode</label>
              <input
                type="text"
                value={form.barcode || ''}
                onChange={e => updateField('barcode', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm font-mono"
                placeholder="e.g. 6224000145590"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Shelf Life</label>
              <input
                type="text"
                value={form.shelf_life || ''}
                onChange={e => updateField('shelf_life', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm"
                placeholder="e.g. 6 MONTHS"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Origin</label>
            <input
              type="text"
              value={form.origin || ''}
              onChange={e => updateField('origin', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm"
              placeholder="e.g. Greece"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Image URL</label>
            <input
              type="text"
              value={form.image_url || ''}
              onChange={e => updateField('image_url', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm"
              placeholder="https://..."
            />
            {form.image_url && (
              <div className="mt-3 w-32 h-32 rounded-xl overflow-hidden bg-gray-100">
                <img src={form.image_url} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Description *</label>
            <textarea
              value={form.description || ''}
              onChange={e => updateField('description', e.target.value)}
              rows={6}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm resize-y"
              placeholder="Product description including suggested uses..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Storage Instructions</label>
            <textarea
              value={form.storage || ''}
              onChange={e => updateField('storage', e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm resize-y"
              placeholder="Storage instructions..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Shelf Life Detail</label>
            <textarea
              value={form.shelf_life_detail || ''}
              onChange={e => updateField('shelf_life_detail', e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm resize-y"
              placeholder="Detailed shelf life info (opened vs unopened)..."
            />
          </div>
        </div>
      </div>

      {/* Nutrition Section */}
      <div className="mt-8 border-t border-gray-100 pt-6">
        <button
          onClick={() => setExpandedNutrition(!expandedNutrition)}
          className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4"
        >
          Nutrition Facts ({form.nutrition.length} items)
          {expandedNutrition ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expandedNutrition && (
          <div className="space-y-3">
            {form.nutrition.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="text"
                  value={item.nutrient}
                  onChange={e => updateNutrition(index, 'nutrient', e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="Nutrient name"
                />
                <input
                  type="text"
                  value={item.amount}
                  onChange={e => updateNutrition(index, 'amount', e.target.value)}
                  className="w-32 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="Amount"
                />
                <input
                  type="text"
                  value={item.daily_value || ''}
                  onChange={e => updateNutrition(index, 'daily_value', e.target.value || null)}
                  className="w-28 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="% DV"
                />
                <button
                  onClick={() => removeNutrition(index)}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button
              onClick={addNutrition}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-gray-300 text-sm text-gray-500 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
            >
              <Plus size={14} />
              Add Nutrient
            </button>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={() => onSave(form)}
          disabled={saving || !form.name}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50"
        >
          <Save size={18} />
          {saving ? 'Saving...' : (product.id ? 'Update Product' : 'Create Product')}
        </button>
        <button
          onClick={() => onPreview(form)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors"
        >
          <Eye size={18} />
          Preview
        </button>
      </div>
    </div>
  )
}

// ─── PRODUCT PREVIEW COMPONENT ───────────────────────────────
function ProductPreview({
  product,
  onBack,
  onEdit,
}: {
  product: Product
  onBack: () => void
  onEdit: () => void
}) {
  return (
    <div className="mb-6">
      {/* Action Bar */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          ← Back to Form
        </button>
        <button
          onClick={onEdit}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-700 text-sm font-medium hover:bg-amber-100 transition-colors"
        >
          <Edit3 size={16} />
          Edit
        </button>
        <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">PREVIEW MODE</span>
      </div>

      {/* Preview Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center min-h-[400px]">
            {product.image_url ? (
              <div className="relative w-full h-80 flex items-center justify-center">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <Package size={64} />
                <p className="mt-2 text-sm">No image</p>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-3">{product.name || 'Untitled Product'}</h1>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {product.size && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Size</p>
                  <p className="text-sm font-medium text-gray-800">{product.size}</p>
                </div>
              )}
              {product.shelf_life && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Shelf Life</p>
                  <p className="text-sm font-medium text-gray-800">{product.shelf_life}</p>
                </div>
              )}
              {product.barcode && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Barcode</p>
                  <p className="text-sm font-mono text-gray-800">{product.barcode}</p>
                </div>
              )}
              {product.origin && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Origin</p>
                  <p className="text-sm font-medium text-gray-800">{product.origin}</p>
                </div>
              )}
            </div>

            {product.description && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{product.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Storage */}
            {product.storage && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  🧊 Storage Instructions
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{product.storage}</p>
              </div>
            )}

            {/* Shelf Life Detail */}
            {product.shelf_life_detail && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  📅 Shelf Life Details
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{product.shelf_life_detail}</p>
              </div>
            )}

            {/* Nutrition */}
            {product.nutrition && product.nutrition.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  🥗 Nutrition Facts
                </h3>
                <div className="bg-gray-50 rounded-xl p-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-2 text-left text-gray-500 font-medium">Nutrient</th>
                        <th className="pb-2 text-right text-gray-500 font-medium">Amount</th>
                        <th className="pb-2 text-right text-gray-500 font-medium">% DV</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nutrition.map((item, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="py-1.5 text-gray-700">{item.nutrient}</td>
                          <td className="py-1.5 text-right text-gray-600">{item.amount}</td>
                          <td className="py-1.5 text-right text-gray-400">{item.daily_value || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
