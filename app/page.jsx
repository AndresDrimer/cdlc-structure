import Row from "./components/Row";
import Toggler from "./components/Toggler"
import { getAllProducts, getAllProductsCleaned, getHighlightedProducts } from "../lib/mongo/products";
import SearchBar from "./components/SearchBar";

export const dynamic = "auto"; //content is all cached as much as possible

export default async function Home() {
  // const { products } = await getAllProducts();
  const { products } = await getAllProductsCleaned();
  const { highlightedProducts } = await getHighlightedProducts();
 
  return (
    <main className="flex-1 flex flex-col justify-between">
      <h1 className="text-center underline decoration-pink-500 text-xs">Página estática para usuario Anónimo</h1>
           
      
      {/*Buscador por titulo con filtro, dirige a prod por Id, FORM con server action */}
    <section className="flex flex-col justify-between mx-10">
    
      <Toggler className="item-end"/>
<SearchBar />
    </section>

    
  {/* Row de TODOS los productos*/}
  {/* este tiene que tener un selector para mostrar digitales (preset) o fisicos */}

  {/* creo que habria que insertar aca los context, sino se me convertiria page en use client, y yo tengo aca los fetch a las DB*/}

      <Row products={products} title="catálogo" />

      {/*Row de Productos destacados */}
      <Row products={highlightedProducts} title="colecciones"  />

    
    </main>
  );
}
