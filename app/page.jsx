import Row from "./components/Row";
import { getAllProducts, getHighlightedProducts } from "../lib/mongo/products";

export const dynamic = "auto"; //content is all cached as much as possible

export default async function Home() {
  const { products } = await getAllProducts();
  const { highlightedProducts } = await getHighlightedProducts();
 
  return (
    <main className="">
      <h1 className="text-center underline decoration-pink-500 text-xs">Página estática para usuario Anónimo</h1>
      {/*Buscador por titulo con filtro, dirige a prod por Id, FORM con server action */}
    


      {/*Row de Productos destacados */}
      <Row products={highlightedProducts} title="lanzamientos y destacados" />

      {/* Row de TODOS los productos*/}
      <Row products={products} title="catálogo completo" />
    </main>
  );
}
