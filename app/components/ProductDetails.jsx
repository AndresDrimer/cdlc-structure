import React from "react";
import ImageCollage from "./ImageCollage";

function ProductDetail({ product }) {
  console.log(product._id);
  return (
    <section className="p-4">
      {/*contenedor de imagens y titulos*/}
      <div className="flex">
        <ImageCollage product={product} />

        <div className="flex-1 mx-4">
          <h1 className="text-bold text-2xl uppercase">{product.title}</h1>
          <h1>de {product.author}</h1>
          {/*ficha tecnica */}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, quas in. Veritatis explicabo accusantium soluta voluptatem corporis aliquid dolore, itaque aliquam optio dolorem assumenda? Quas reprehenderit quod perspiciatis excepturi quidem?
            </p>
          {/* boton de link a TiendaNube para comprar*/}
          <button className="button">comprar</button>
        </div>
      </div>

      {/*Descripcion detallada, comentarios*/}
    </section>
  );
}

export default ProductDetail;
