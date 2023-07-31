import { getAllProducts, getProductById, getSameGenre } from "@/lib/mongo/products";
import ProductDetails from "../components/ProductDetails";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
import Row from "../components/Row";
import Toggler from "../components/Toggler";

export default async function detailById({ params }) {
  const { product } = await getProductById(params.id);
  const { sameGenreProducts } = await getSameGenre(product.genre, product._id);
  const { products } = await getAllProducts();

//filter for combos and colecciones (sort method brings combos first on array)
const comboAndColeccionProducts = await products.filter(it=>it.isColeccion===true || it.isCombo===true).sort((a,b)=> b.isCombo - a.isCombo)
  

const id = params.id

  return (
    <div className="">
      <div className="">
        <Link href="/">
          <button className="flex items-center ml-4 cursor-pointer text-gray-500 hover:text-black mt-2 text-xs"> 
            <IoChevronBackOutline className="inline" />
            volver
          </button>
        </Link>
      </div>
      {/*<Toggler />*/}


      <div>
        <ProductDetails products={products} id={id}/>
      </div>

      
      {/* Otros libros de la misma colección */}
      { !product.isCombo && !product.isColeccion && product.genre!=="no-genre"|"ensayos"|"barrios"|"planeamiento" &&
         <Row products={sameGenreProducts} title="de la misma colección" />
      }
      
  {/*Row de Productos destacados */}
       { product.isCombo || product.isColeccion || product.genre==="no-genre"|"ensayos"|"barrios"|"planeamiento" && 
         <Row products={comboAndColeccionProducts} title="combos & colecciones" />
       }
      </div>
  );
};
