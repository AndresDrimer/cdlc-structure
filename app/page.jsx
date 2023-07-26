import Row from "./components/Row";
import { getAllProducts, getHighlightedProducts } from "../lib/mongo/products";

export const dynamic = "auto"; //content is all cached as much as possible

export default async function Home() {
  const { products } = await getAllProducts();
  const { highlightedProducts } = await getHighlightedProducts();
 
  return (
    <main className="flex-1 flex flex-col justify-between">
      <h1 className="text-center underline decoration-pink-500 text-xs">Página estática para usuario Anónimo</h1>
      {/*Buscador por titulo con filtro, dirige a prod por Id, FORM con server action */}
    
  {/* Row de TODOS los productos*/}
  {/* este tiene que tener un selector para mostrar digitales (preset) o fisicos */}
      <Row products={products} title="catálogo completo" />

      {/*Row de Productos destacados */}
      <Row products={highlightedProducts} title="lanzamientos y destacados" />

    
    </main>
  );
}
