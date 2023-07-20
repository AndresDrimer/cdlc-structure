import Row from "./components/Row";
import { getAllProducts, getHighlightedProducts } from "../lib/mongo/products";

export const dynamic = "auto"; //content is all cached as much as possible

export default async function Home() {
  const { products } = await getAllProducts();
  const { highlightedProducts } = await getHighlightedProducts();
 
  return (
    <main>
      <h1 className="text-center">Página estática para usuario Anónimo</h1>

      {/*Row de Productos destacados */}
      <Row products={highlightedProducts} title="lanzamientos y destacados" />

      {/* Row de TODOS los productos*/}
      <Row products={products} title="catálogo completo" />
    </main>
  );
}
