import { urlStoreIntl } from '@/constants/constant'
import React from 'react'

function TechSpecs({product}: {product: Product}) {
   
  return (
    <div className="flex-1 mx-4">
        <div>
        <p className='text-xs text-right'>colección <span className='uppercase'>{product.genre}</span></p>
        <hr className='border-gris'/>
    </div>
    <h1 className="text-bold text-4xl uppercase mt-2 w-3/4">{product.title}</h1>
    
    { product.author &&
    <h1 className="text-sm w-3/4">de {product.author}</h1>
    }

    {!product.author && product.contains &&
    <div> 
        <h1 className="text-md w-3/4"> incluye: </h1> <ul>{product.contains && product.contains.split(",").map(it=><li key={it} className='list-disc text-sm py-1 ml-4'>{it}</li>)} </ul></div>}


    {/*ficha tecnica */}
   
    {/* boton de link a TiendaNube para comprar*/}
    <div className="mt-8">
    <a
      href={product.urlLocal ? product.urlLocal : urlStoreIntl}
      target="_blank"
    >
      <button className="button">comprar</button>
    </a></div>
  </div>
  )
}

export default TechSpecs