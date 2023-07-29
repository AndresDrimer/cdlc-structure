"use client";
import ImageCollage from "./ImageCollage";
import TechSpecs from "./TechSpecs";
import { useGlobalContext } from "../contexts/context";
import TechSpecsCollection from "./TechSpecsCollection";
import Carrousel from "./Carrousel";

//a lo que esta en hola debria llegarle un products filtrado con los elementos cuyo string codeDUX este includio en el array que le pasamos

async function ProductDetail({ products, id }) {
  const { isDigital, setIsDigital } = useGlobalContext();

  //filter selected product
  const [product] = products.filter((it) => it._id === id);

  //filter same genre
  const sameGenreProducts = products.filter((it) => it.genre === product.genre);

  //filter products with codeDUX included in containsDUX code
  const comboContains = product.containsDUXCode;
  const comboProducts = products.filter( (it) =>
    comboContains.includes(it.codeDUX) );


  //filter digital o physical from digitalContext
  const filteredSameGenreProducts = sameGenreProducts.filter(
    (product) => product.digital === isDigital
  );

  return (
    <section className="p-4">
      {/*contenedor de imagenes y titulos*/}

      {/*small devices*/}
      <div className="block md:hidden">
        <Carrousel product={product} />

        {product.isColeccion === false && product.isCombo === false ? (
          <TechSpecs product={product} />
        ) : (
          <TechSpecsCollection
            filteredSameGenreProducts={filteredSameGenreProducts}
            product={product}
            comboProducts={comboProducts}
          />
        )}
      </div>

      {/*medium devices and above*/}
      <div className="hidden md:block">
        <div className="flex mx-auto">
          <div className="hidden md:inline-block w-3/5">
            <ImageCollage product={product} />
          </div>
          <TechSpecs product={product} />
        </div>
      </div>

      {/*Descripcion detallada, comentarios*/}
      {!product.isColeccion && !product.isCombo && (
        <div className="space-y-6 ml-4 mt-4 mr-6">
          <div className="">
            <div className="my-8">
              <p className="text-xs text-gray-500">{product.techSpecs}</p>
            </div>

            <p className="text-sm font-bold">Reseña</p>
            <p className="text-sm leading-smooth">{product.review}</p>
          </div>
          <div>
            <p className="text-sm font-bold ">Sobre autor(a)</p>
            <p className="text-xs leading-smooth">{product.authorSpecs}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetail;
