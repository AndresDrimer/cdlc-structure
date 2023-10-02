import { getProductById, getAllProducts, editProduct } from '@/lib/mongo/products'
import React from 'react'
import FormEdit from "@/app/components/FormEdit"
import BackButton from '@/app/components/BackButtonAdmin'
import { updateProduct } from '@/app/actions/serverActions'
import { redirect } from 'next/navigation'


async function page({params}) {
    const {product} = await getProductById(params.id)

    const {products} = await getAllProducts()

    const genresRaw = await (products.map(it=> it.genre)).filter(it=>it !== null )
    const genresClean = [...new Set(genresRaw)]
 





    return (
    <div>
    <BackButton />
   {/*<FormEdit product={product} genresClean={genresClean}/>*/} 
   <form action={updateProduct}>
   <label>codeDUX: <input type="text" defaultValue={product.codeDUX} name='title'/></label>
   <label>ISBN: <input defaultValue={product.ISBN} type="text" name="ISBN" /> </label>
   <label>genero: <select defaultValue={product.genre}>{genresClean.map(it=>  <option value={it} key={it}>{it}</option> )} </select></label> 
   <label>título: <input type="text" defaultValue={product.title} name='title'/></label>
   <label>author: <input defaultValue={product.author} type="text" name="author" /></label>
   <label>urlIntl: <input defaultValue={product.urlIntl} type="text" name="urlIntl" /></label>
   <label>urlLocal: <input defaultValue={product.urlLocal} type="text" name="urlLocal" /></label>
   <label>colorCode: <input defaultValue={product.colorCode} type="text" name="colorCode" /></label>
   <label>techSpecs: <input defaultValue={product.techSpecs} type="text" name="techSpecs" /></label>
   <label>authorSpecs: <input defaultValue={product.authorSpecs} type="text" name="authorSpecs"/></label>
   <label>review: <input defaultValue={product.review} type="text" name="review"/></label>

   
   <label>deprecated: <input defaultValue={product.deprecated} type="checkbox" name="deprecated" /></label>


   <label>show: <input defaultValue={product.show} type="checkbox" name="show" /></label>
   <label>digital: <input defaultValue={product.digital} type="checkbox" name="digital" /></label>
   <label>combo: <input defaultValue={product.combo} type="checkbox" name="combo" /></label>
   <label>highlighted: <input defaultValue={product.highlighted} type="checkbox" name="highlighted" /></label>
   <label>new: <input defaultValue={product.new_} type="checkbox" name="new" /></label>
   <label>isColeccion: <input defaultValue={product.isColeccion} type="checkbox" name="isColeccion" check/></label>
   <label>isCombo: <input defaultValue={product.isCombo} type="checkbox" name="isCombo" /></label>
   <label>containsDUXCode: <input defaultValue={product.containsDUXCode} type="text" name="containsDUXcode" /></label>
   <label>contains: <input defaultValue={product.contains} type="text" name="contains" /></label>
   <label>stock: <input defaultValue={product.stock} type="number" name="stock" /></label>
   <label>discountPercentage:<input defaultValue={product.discountPercentage} type="number" name="stock" /></label>
   <label>priceTN: <input defaultValue={product.priceTN} type="number" name="priceTN" step="0.01"/></label>
   <label>priceML: <input defaultValue={product.priceML} type="number" name="priceML" step="0.01"/></label>
   <label>priceUS: <input defaultValue={product.priceUS} type="number" name="priceUS" step="0.01"/></label>
   <label>kg: <input defaultValue={product.kg} type="number" name="kg" step="0.001"/></label>
   <label>x: <input defaultValue={product.x} type="number" name="x" /></label>
   <label>y: <input defaultValue={product.y} type="number" name="y" /></label>
   <label>z: <input defaultValue={product.z} type="number" name="z" /></label>
   <label>imgFront: <input defaultValue={product.imgFront} type="text" name="imgFront" /></label>
   <label>imgBack: <input defaultValue={product.imgBack} type="text" name="imgBack" /></label>
   <label>urlGoogleDoc:<input defaultValue={product.urlGoogleDoc} type="text" name="urlGoogleDoc" /></label>
   <label>key: <input defaultValue={product.key} type="password" name="key" /></label>
   <button>update product</button>
   </form>
    </div>
  )
}

export default page