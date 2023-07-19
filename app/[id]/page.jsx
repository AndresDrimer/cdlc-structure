import { getProductById } from "@/lib/mongo/products"

export default async function detailById({params}) {
    console.log(params.id)
    const product = await getProductById(params.id)
    console.log(product.product.title)
  return (
    <div>
    <h1>product by id</h1>
    <p>{product.product.title}</p>
    <p>{product.product.author}</p>
    
    page</div>
  )
}
