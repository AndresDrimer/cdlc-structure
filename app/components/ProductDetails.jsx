import React from "react";
import ImageCollage from "./ImageCollage";
import Link from "next/link";
import urlStoreIntl from "../../constants/constant";

function ProductDetail({ product }) {
  
  return (
    <section className="p-4">
      {/*contenedor de imagens y titulos*/}
      <div className="flex">
        <ImageCollage product={product} />

        <div className="flex-1 mx-4">
          <h1 className="text-bold text-3xl uppercase">{product.title}</h1>
          <h1 className="text-md w-3/4">de {product.author}</h1>

          {/*ficha tecnica */}
          <div className="my-6 w-3/4">
            {" "}
            <p className="text-xs">{product.techSpecs}</p>
          </div>

          {/* boton de link a TiendaNube para comprar*/}
          <a
            href={product.ProdUrl ? product.ProdUrl : urlStoreIntl}
            target="_blank"
          >
            <button className="button">comprar</button>
          </a>
        </div>
      </div>

      {/*Descripcion detallada, comentarios*/}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-bold">Reseña</p>
          <p className="text-sm">{product.review}</p>
        </div>
        <div>
          <p className="text-sm font-bold">Sobre autor(a)</p>
          <p className="text-xs">{product.authorSpecs}</p>
        </div>
      </div>
      {/* Otros libros de la misma colección */}
    </section>
  );
}

export default ProductDetail;
