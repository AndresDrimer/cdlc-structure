import Image from "next/image";
import Link from "next/link";
import React from "react";
import BotonComprar from "./BotonComprar";

function TechSpecsCollectionMd({
  filteredSameGenreProducts,
  product,
  comboProducts,
}: {
  filteredSameGenreProducts: Product[];
  product: Product;
  comboProducts: Product[];
}) {


  return (
    <div className="flex-1">
     

{product.genre !== "no-genre" && (
  <div>
    <p className={"text-xs text-right"}>
      colección <span className="uppercase">{product.genre}</span>
    </p>
    
    {/*line gets color of collection if it exists, otherwise custom gray*/}
    <hr
      className={`border-1 {product.genre ? border-${product.genre}  : border-gris }`}
    />
  </div>
)}

<h1 className="text-bold  text-3xl sm:text-4xl uppercase mt-2 w-3/4">
  {product.title}
</h1>

{product.author && (
  <h1 className="text-sm w-3/4 mt-2">de {product.author}</h1>
)}


      
  
      <BotonComprar product={product} />
    </div>
  );
}

export default TechSpecsCollectionMd;
