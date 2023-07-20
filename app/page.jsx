import Row from "./components/Row"
import { getAllProducts, getHighlightedProducts } from "../lib/mongo/products"


export default async function Home() {
 const { products } = await getAllProducts()

 
  return (
    <main> 
      <h1>hola</h1>
      {/*<img src="https://drive.google.com/uc?export=view&id=17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV"></img>*/}
  
    
{/*Row de Productos destacados */}

     
{/* Row de TODOS los productos*/}
     <Row products={products}/>
     
    
     
    </main>
  )
}
