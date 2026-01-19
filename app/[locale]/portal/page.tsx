'use client'

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Package, FileText, Heart, Settings, HelpCircle, Search, TrendingUp, Truck, CreditCard } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

export default function PortalPage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
    alert('Product added to cart! View your cart to proceed with checkout.')
  }

  const recentOrders = [
    { id: 'ORD-2401', date: 'Jan 18, 2024', items: 12, total: '2,450 SAR', status: 'delivered' },
    { id: 'ORD-2398', date: 'Jan 15, 2024', items: 8, total: '1,800 SAR', status: 'in-transit' },
    { id: 'ORD-2395', date: 'Jan 12, 2024', items: 15, total: '3,200 SAR', status: 'processing' },
  ]

  const frequentProducts = [
    { id: 1, name: 'Greek Kalamata Olives', lastOrdered: '5 days ago', quantity: 5 },
    { id: 2, name: 'Premium Feta Cheese', lastOrdered: '5 days ago', quantity: 3 },
    { id: 3, name: 'Turkish Pickled Cucumbers', lastOrdered: '12 days ago', quantity: 4 },
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      'delivered': 'bg-green-100 text-green-700',
      'in-transit': 'bg-blue-100 text-blue-700',
      'processing': 'bg-yellow-100 text-yellow-700',
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r border-charcoal-100 min-h-screen">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="font-semibold text-charcoal text-sm mb-1">Welcome back,</h2>
              <p className="text-lg font-bold text-olive">Al Riyadh Grand Hotel</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeView === 'dashboard' ? 'bg-olive text-white' : 'text-charcoal-700 hover:bg-cream-100'
                }`}
              >
                <TrendingUp size={20} />
                <span className="font-medium">Dashboard</span>
              </button>
              <button
                onClick={() => setActiveView('products')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeView === 'products' ? 'bg-olive text-white' : 'text-charcoal-700 hover:bg-cream-100'
                }`}
              >
                <Package size={20} />
                <span className="font-medium">Products</span>
              </button>
              <button
                onClick={() => setActiveView('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeView === 'orders' ? 'bg-olive text-white' : 'text-charcoal-700 hover:bg-cream-100'
                }`}
              >
                <FileText size={20} />
                <span className="font-medium">My Orders</span>
              </button>
              <button
                onClick={() => setActiveView('invoices')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeView === 'invoices' ? 'bg-olive text-white' : 'text-charcoal-700 hover:bg-cream-100'
                }`}
              >
                <CreditCard size={20} />
                <span className="font-medium">Invoices</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-charcoal-700 hover:bg-cream-100 transition-colors">
                <Heart size={20} />
                <span className="font-medium">Favorites</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-charcoal-700 hover:bg-cream-100 transition-colors">
                <Settings size={20} />
                <span className="font-medium">Settings</span>
              </button>
              <Link href="/en/faq">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-charcoal-700 hover:bg-cream-100 transition-colors">
                  <HelpCircle size={20} />
                  <span className="font-medium">Support</span>
                </button>
              </Link>
            </nav>

            <div className="mt-8 pt-8 border-t border-charcoal-100">
              <Link href="/quote">
                <Button variant="primary" className="w-full">
                  <ShoppingCart size={20} className="mr-2" />
                  Quick Order
                </Button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="bg-white border-b border-charcoal-100 p-6">
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products, orders..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                />
              </div>
              <div className="flex items-center gap-4 ml-4">
                <button className="p-2 hover:bg-cream-100 rounded-lg transition-colors relative">
                  <div className="w-2 h-2 bg-terracotta rounded-full absolute top-1 right-1" />
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </button>
                <div className="w-10 h-10 rounded-full bg-olive/20 flex items-center justify-center text-olive font-semibold">
                  AR
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          {activeView === 'dashboard' && (
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">Good morning, Al Riyadh Grand Hotel</h1>
                <p className="text-charcoal-600">Last login: Jan 18, 2024 at 9:30 AM</p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link href="/en/products">
                  <Card hover className="p-6 text-center bg-gradient-to-br from-terracotta to-terracotta-600 text-white cursor-pointer">
                    <ShoppingCart size={32} className="mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">New Order</h3>
                    <p className="text-sm opacity-90">Start ordering</p>
                  </Card>
                </Link>
                <button onClick={() => setActiveView('orders')} className="text-left">
                  <Card hover className="p-6 text-center border-2 border-olive/20 cursor-pointer">
                    <Package size={32} className="mx-auto mb-3 text-olive" />
                    <h3 className="font-semibold mb-1 text-charcoal">Reorder Last</h3>
                    <p className="text-sm text-charcoal-600">Quick reorder</p>
                  </Card>
                </button>
                <Link href="/en/quote">
                  <Card hover className="p-6 text-center border-2 border-olive/20 cursor-pointer">
                    <FileText size={32} className="mx-auto mb-3 text-olive" />
                    <h3 className="font-semibold mb-1 text-charcoal">Request Quote</h3>
                    <p className="text-sm text-charcoal-600">Get pricing</p>
                  </Card>
                </Link>
                <button onClick={() => setActiveView('orders')} className="text-left">
                  <Card hover className="p-6 text-center border-2 border-olive/20 cursor-pointer">
                    <Truck size={32} className="mx-auto mb-3 text-olive" />
                    <h3 className="font-semibold mb-1 text-charcoal">Track Delivery</h3>
                    <p className="text-sm text-charcoal-600">See status</p>
                  </Card>
                </button>
              </div>

              {/* Recent Orders */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-charcoal">Recent Orders</h2>
                  <Link href="/portal/orders" className="text-olive font-medium hover:underline">
                    View All
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-charcoal-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Order #</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Items</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Total</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-charcoal-100 hover:bg-cream-50 transition-colors">
                          <td className="py-4 px-4 font-medium text-charcoal">{order.id}</td>
                          <td className="py-4 px-4 text-charcoal-600">{order.date}</td>
                          <td className="py-4 px-4 text-charcoal-600">{order.items}</td>
                          <td className="py-4 px-4 font-medium text-charcoal">{order.total}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                              {order.status.replace('-', ' ')}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-sm text-olive hover:underline">View</button>
                              <button className="text-sm text-olive hover:underline">Reorder</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Quick Reorder & Account Status */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">Order Again</h2>
                  <div className="space-y-4">
                    {frequentProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 bg-cream-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-olive/10 rounded flex items-center justify-center">
                            <Package size={24} className="text-olive" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-charcoal">{product.name}</h3>
                            <p className="text-sm text-charcoal-600">Last: {product.lastOrdered}</p>
                          </div>
                        </div>
                        <Button onClick={() => addToCart(product.id)} variant="outline" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">Account Status</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-charcoal-100">
                      <span className="text-charcoal-600">Payment Terms</span>
                      <span className="font-semibold text-charcoal">Net 30</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-charcoal-100">
                      <span className="text-charcoal-600">Credit Limit</span>
                      <span className="font-semibold text-charcoal">50,000 SAR</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-charcoal-100">
                      <span className="text-charcoal-600">Outstanding Balance</span>
                      <span className="font-semibold text-terracotta">4,250 SAR</span>
                    </div>
                    <div className="pt-4">
                      <Link href="/portal/invoices">
                        <Button variant="ghost" className="w-full text-olive">
                          View Invoices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Orders View */}
          {activeView === 'orders' && (
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">My Orders</h1>
                <p className="text-charcoal-600">Track and manage your orders</p>
              </div>

              <Card className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-charcoal-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-charcoal">{order.id}</h3>
                          <p className="text-sm text-charcoal-600">{order.date}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                          {order.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-charcoal-600">Items</p>
                          <p className="font-semibold text-charcoal">{order.items}</p>
                        </div>
                        <div>
                          <p className="text-sm text-charcoal-600">Total</p>
                          <p className="font-semibold text-charcoal">{order.total}</p>
                        </div>
                        <div>
                          <p className="text-sm text-charcoal-600">Delivery</p>
                          <p className="font-semibold text-charcoal">
                            {order.status === 'delivered' ? 'Delivered' : 'In Progress'}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button variant="outline" size="sm">Track Order</Button>
                        <Button variant="primary" size="sm">Reorder</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Invoices View */}
          {activeView === 'invoices' && (
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">Invoices</h1>
                <p className="text-charcoal-600">View and download your invoices</p>
              </div>

              <Card className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-charcoal-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Invoice #</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Order #</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-charcoal-100 hover:bg-cream-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-charcoal">INV-2401</td>
                        <td className="py-4 px-4 text-charcoal-600">Jan 18, 2024</td>
                        <td className="py-4 px-4 text-charcoal-600">ORD-2401</td>
                        <td className="py-4 px-4 font-medium text-charcoal">2,450 SAR</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            Paid
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">Download PDF</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-charcoal-100 hover:bg-cream-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-charcoal">INV-2398</td>
                        <td className="py-4 px-4 text-charcoal-600">Jan 15, 2024</td>
                        <td className="py-4 px-4 text-charcoal-600">ORD-2398</td>
                        <td className="py-4 px-4 font-medium text-charcoal">1,800 SAR</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                            Pending
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">Download PDF</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-charcoal-100 hover:bg-cream-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-charcoal">INV-2395</td>
                        <td className="py-4 px-4 text-charcoal-600">Jan 12, 2024</td>
                        <td className="py-4 px-4 text-charcoal-600">ORD-2395</td>
                        <td className="py-4 px-4 font-medium text-charcoal">3,200 SAR</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            Paid
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">Download PDF</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className="p-6 bg-olive/5 border-olive/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Outstanding Balance</h3>
                    <p className="text-sm text-charcoal-600">Due within 30 days</p>
                  </div>
                  <p className="text-3xl font-bold text-terracotta">4,250 SAR</p>
                </div>
              </Card>
            </div>
          )}

          {/* Products View */}
          {activeView === 'products' && (
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">Browse Products</h1>
                <p className="text-charcoal-600">Explore our full catalog</p>
              </div>
              <Card className="p-12 text-center">
                <Package size={64} className="mx-auto mb-4 text-charcoal-300" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Visit Our Products Page</h3>
                <p className="text-charcoal-600 mb-6">Browse our complete catalog of premium Mediterranean ingredients</p>
                <Link href="/en/products">
                  <Button variant="primary" size="lg">
                    View All Products
                  </Button>
                </Link>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
