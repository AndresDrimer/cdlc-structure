import Row from "./components/Row";
import Toggler from "./components/Toggler";
import { getAllProducts } from "../lib/mongo/products";
import SearchBar from "./components/SearchBar";

export const dynamic = "force-dynamic" ; //content is all cached as much as possible

export default async function Home() {

  const { products } = await getAllProducts();

  //filter for singular products
  const singularProducts = await products.filter(it=>it.isColeccion===false && it.isCombo===false)

  //filter for combos and colecciones (sort method brings combos first on array)
  const comboAndColeccionProducts = await products.filter(it=>it.isColeccion===true || it.isCombo===true).sort((a,b)=> b.isCombo - a.isCombo)

  //filter for each coleccion (sort method brings product which have isColeccion=true first on returned array)
  const habitatProducts = await products.filter(it=>it.genre==="hábitat").sort((a,b)=> b.isColeccion - a.isColeccion)
  const urbanidadProducts = await products.filter(it=>it.genre==="urbanidad").sort((a,b)=> b.isColeccion - a.isColeccion)
  const territorioProducts = await products.filter(it=>it.genre==="territorio").sort((a,b)=> b.isColeccion - a.isColeccion)
  const movilidadProducts = await products.filter(it=>it.genre==="movilidad").sort((a,b)=> b.isColeccion - a.isColeccion)
  const ciudadesProducts = await products.filter(it=>it.genre==="ciudades").sort((a,b)=> b.isColeccion - a.isColeccion)
  
  return (
    <main className="flex-1 flex flex-col justify-between">
      <h1 className="text-center underline decoration-pink-500 text-xs">
        Página estática para usuario Anónimo
      </h1>

      <section className="flex flex-col justify-between mx-auto w-3/4 md:w-1/2 items-center">
        <Toggler className="item-end" />
        <SearchBar products={products} />{/*Buscador por titulo con filtro, dirige a prod por Id, FORM con server action */}
      </section>


      {/* Row de TODOS los productos*/}
      <Row products={singularProducts} title="catálogo" />

      {/* Row de cada coleccion (de las que tienen)*/}
      <Row products={habitatProducts} title="colección Hábitat" />
      <Row products={urbanidadProducts} title="colección Urbanidad" />
      <Row products={ciudadesProducts} title="colección Ciudades" />
      <Row products={movilidadProducts} title="colección Movilidad" />
      <Row products={territorioProducts} title="colección Territorio" />

      {/*Row de Productos destacados */}
      <Row products={comboAndColeccionProducts} title="combos & colecciones" />
    </main>
  );
}

