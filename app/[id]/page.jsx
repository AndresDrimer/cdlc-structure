import { getProductById } from "@/lib/mongo/products"
import ProductDetails from "../components/ProductDetails"


export default async function detailById({params}) {
   
    const product = await getProductById(params.id)
    console.log(product)
  return (
    <div>
    
    <h1 className="text-center">product by id</h1>
    <ProductDetails product={product.product}/>
    
  
    
    </div>
  )
}
