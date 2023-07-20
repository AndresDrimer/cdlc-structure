import { getProductById } from "@/lib/mongo/products"
import ProductDetails from "../components/ProductDetails"


export default async function detailById({params}) {
   
    const product = await getProductById(params.id)
    
  return (
    <div>
    
    <h1>product by id</h1>
    <ProductDetails product={product.product}/>
    
  
    
    </div>
  )
}
