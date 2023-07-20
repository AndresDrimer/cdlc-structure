import React from "react";

function ProductDetail({ product }) {
  console.log(product._id);
  return (
    <section className="p-4">
      {/*contenedor de imagens y titulos*/}
      <div className="flex">
        <div className="flex-1">
        <div className="flex">
          <div className="w-1/3">
          <img src={product.imgFront} alt="" />
          <img src={product.imgBack} alt="" />
          </div>
          <div className="w-2/3">
          <img src={product.imgFront} alt="" className="hover:scale-200"/>
          </div>
        </div>
        
        </div>

        <div className="flex-1">
          <h1 className="text-bold text-2xl uppercase">{product.title}</h1>
          <h1>de {product.author}</h1>
          {/*ficha tecnica */}
          {/* boton de link a TiendaNube para comprar*/}
        </div>
      </div>


      {/*Descripcion detallada, comentarios*/}
   
    </section>
  );
}

export default ProductDetail;
