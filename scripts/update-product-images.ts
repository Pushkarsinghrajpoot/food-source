import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vmlekwgrpfjooszopush.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbGVrd2dycGZqb29zem9wdXNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTQzMDA5MSwiZXhwIjoyMDg3MDA2MDkxfQ.MHejIwSeeXnrd2rznDvb6ajgp1k288ol6dIZufz2WYs'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const productImageMapping: { [key: string]: string } = {
  'White Cheese, Lightly Salted': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434812/Altaieb_white_cheese_lightly_salted_gcy6th.png',
  'Whipping Analogue Cream': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434812/Altaeib_Whipping_Analogue_Cream_mzqec7.png',
  'Double Cream Cheese': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434810/Altaieb_double_cream_cheese_kdrtc5.png',
  'Unprocessed Cottage Cheese': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434810/Altaieb_Unprocessed_Cottage_Cheese_sra6tq.png',
  'Feta Cheese': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434809/Altaeib_Fata_Cheese_rgkdwz.png',
  'Natural Cream': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434810/Altaieb_Natural_Cream_ugyrv7.png',
  'Semi White Cheese': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434789/Laziza_Semi_White_Soft_Cheese_gexkmh.png',
  'Grilled Olives': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434788/Joud_Grilled_Olives_dwpy1c.png',
  'Selected Greek Black Olives': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434788/Joud_Selected_Greek_Black_Olives_i1kobh.png',
  'Selected Greek Black Kalamata Olives': 'https://res.cloudinary.com/daeyqeofn/image/upload/v1771434788/Joud_Selected_Greek_Black_Kalmata_Olives_k3kw0s.png',
}

async function updateProductImages() {
  console.log('Fetching all products...')
  
  const { data: products, error: fetchError } = await supabase
    .from('products')
    .select('id, name, image_url')
    .order('name')
  
  if (fetchError) {
    console.error('Error fetching products:', fetchError)
    return
  }
  
  console.log(`Found ${products?.length || 0} products in database\n`)
  
  let updateCount = 0
  let skipCount = 0
  
  for (const product of products || []) {
    // Try to find a matching image URL
    const matchingKey = Object.keys(productImageMapping).find(
      key => product.name.toLowerCase().includes(key.toLowerCase()) || 
             key.toLowerCase().includes(product.name.toLowerCase())
    )
    
    if (matchingKey) {
      const imageUrl = productImageMapping[matchingKey]
      console.log(`Updating "${product.name}" with image: ${imageUrl}`)
      
      const { error: updateError } = await supabase
        .from('products')
        .update({ image_url: imageUrl })
        .eq('id', product.id)
      
      if (updateError) {
        console.error(`  ❌ Error updating ${product.name}:`, updateError)
      } else {
        console.log(`  ✅ Updated successfully`)
        updateCount++
      }
    } else {
      console.log(`⚠️  No matching image found for "${product.name}"`)
      skipCount++
    }
  }
  
  console.log(`\n✅ Update complete: ${updateCount} updated, ${skipCount} skipped`)
}

updateProductImages()
