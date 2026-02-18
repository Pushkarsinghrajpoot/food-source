import { supabaseAdmin } from '../lib/supabase'

async function checkProducts() {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('id, name, image_url')
    .limit(10)

  if (error) {
    console.error('Error fetching products:', error)
    return
  }

  console.log('Products in database:')
  console.log(JSON.stringify(data, null, 2))
}

checkProducts()
