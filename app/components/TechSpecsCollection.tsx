import Image from "next/image";
import Link from "next/link";
import React from "react";
import BotonComprar from "./BotonComprar";

function TechSpecsCollection({
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
      
      
      
      {/*if it is a colection it is going to show this*/}
     {product.isColeccion && (<div>
        <p className="text-xs">
          incluye estos {filteredSameGenreProducts.length} libros:
        </p>
        <div>
          {filteredSameGenreProducts.map((it) => (
            <div key={it._id}>
              <Link
                href={`/${it._id}`}
                className="flex items-center"
                target="_blank"
              >
                <img
                  src={it.imgFront}
                  width={100}
                  height={100}
                  alt="tapa de libro"
                  className="hover:scale-110"
                />
                <div>
                  <p className="text-sm uppercase">{it.title}</p>{" "}
                  <p className="text-xs">de {it.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>)}



{/*if it is a COMBO it is going to show this*/}
      {product.isCombo && (
        <div>
            <p className="text-xs">
          incluye estos {comboProducts.length} libros:
        </p>

        <div>
          {comboProducts.map((it) => (
            <div key={it._id}>
              <Link
                href={`/${it._id}`}
                className="flex items-center"
                target="_blank"
              >
                <img
                  src={it.imgFront}
                  width={100}
                  height={100}
                  alt="tapa de libro"
                  className="hover:scale-110"
                />
                <div>
                  <p className="text-sm uppercase">{it.title}</p>{" "}
                  <p className="text-xs">de {it.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>







        </div>



      )}

      <BotonComprar product={product} />
    </div>
  );
}

export default TechSpecsCollection;
