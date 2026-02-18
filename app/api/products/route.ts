import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// GET all products
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ products: data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// POST - create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { data, error } = await supabaseAdmin
      .from('products')
      .insert(body)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ product: data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// PUT - bulk update products
export async function PUT(request: NextRequest) {
  try {
    const { products } = await request.json()

    if (!Array.isArray(products)) {
      return NextResponse.json({ error: 'products must be an array' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const product of products) {
      const { id, ...updateData } = product
      if (!id) {
        errors.push({ product, error: 'Missing id' })
        continue
      }

      const { data, error } = await supabaseAdmin
        .from('products')
        .update(updateData)
        .eq('id', id)
        .select()
        .single()

      if (error) {
        errors.push({ id, error: error.message })
      } else {
        results.push(data)
      }
    }

    return NextResponse.json({
      message: `Updated ${results.length} products, ${errors.length} errors`,
      updated: results,
      errors
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
