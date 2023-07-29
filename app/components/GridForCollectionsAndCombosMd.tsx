import Link from 'next/link'
import React from 'react'

function GridForCollectionsAndCombosMd({filteredSameGenreProducts,comboProducts, product }: {filteredSameGenreProducts: Product[],comboProducts: Product[], product: Product}) {
  return (
    <div className='mt-6'>

   {/*if it is a colection it is going to show this*/}
   {product.isColeccion && (<div>
        <p className="text-sm mt-4">
          incluye estos {filteredSameGenreProducts.length} libros:
        </p>
        <div className='grid grid-cols-2 space-y-2'>
          {filteredSameGenreProducts.map((it) => (
            <div key={it._id}>
              <Link
                href={`/${it._id}`}
                className="flex items-center"
                target="_blank"
              >
                <img
                  src={it.imgFront}
                  width={150}
                  height={150}
                  alt="tapa de libro"
                  className="hover:scale-110"
                />
                <div>
                  <p className="text-md uppercase font-bold">{it.title}</p>{" "}
                  <p className="text-sm">de {it.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>)}



{/*if it is a COMBO it is going to show this*/}
      {product.isCombo && (
        <div>
            <p className="text-sm mt-4">
          incluye estos {comboProducts.length} libros:
        </p>

        <div className='grid grid-cols-2 space-y-2'>
          {comboProducts.map((it) => (
            <div key={it._id}>
              <Link
                href={`/${it._id}`}
                className="flex items-center"
                target="_blank"
              >
                <img
                  src={it.imgFront}
                  width={150}
                  height={150}
                  alt="tapa de libro"
                  className="hover:scale-110"
                />
                <div>
                  <p className="text-md uppercase font-bold">{it.title}</p>{" "}
                  <p className="text-sm">de {it.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>







        </div>



      )}

    </div>
  )
}

export default GridForCollectionsAndCombosMd