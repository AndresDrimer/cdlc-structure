import ImageCollage from "./ImageCollage";
import Link from "next/link";
import urlStoreIntl from "../../constants/constant";
import Image from "next/image";
import Carrousel from "./Carrousel";
import TechSpecs from "./TechSpecs";

function ProductDetail({ product }) {
  return (
    <section className="p-4">
      {/*contenedor de imagenes y titulos*/}

      {/*small devices*/}
      <div className="block md:hidden">
        <Carrousel product={product} />
        <TechSpecs product={product} />
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

      
    </section>
  );
}

export default ProductDetail;
