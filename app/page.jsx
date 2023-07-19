import Row from "./components/Row"
import {getAllProducts} from "../lib/mongo/products"
import Image from "next/image"

export default async function Home() {
 const {products} = await getAllProducts()

  return (
    <main> 
      <h1>hola</h1>
      {/*<img src="https://drive.google.com/uc?export=view&id=17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV"></img>
  */}
     <pre>{products[1].imgBack}</pre>
     
     <Row products={products}/>
     <pre>{products.map(it=>(
        <p key={it._id}>{it.title}</p>)
        )}</pre>
    </main>
  )
}
