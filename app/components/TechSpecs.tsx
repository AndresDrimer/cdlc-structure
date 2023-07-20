import { urlStoreIntl } from '@/constants/constant'
import React from 'react'

function TechSpecs({product}: {product: Product}) {
    
  return (
    <div className="flex-1 mx-4">
   
    <h1 className="text-bold text-4xl uppercase">{product.title}</h1>
    
    { product.author &&
    <h1 className="text-md w-3/4">de {product.author}</h1>
    }

    {!product.author && product.contains &&
    <div> 
        <h1 className="text-md w-3/4"> incluye: </h1> <ul>{product.contains && product.contains.split(",").map(it=><li key={it} className='list-disc text-sm py-1 ml-4'>{it}</li>)} </ul></div>}


    {/*ficha tecnica */}
    <div className="my-6 w-3/4">
      <p className="text-xs">{product.techSpecs}</p>
    </div>

    {/* boton de link a TiendaNube para comprar*/}
    <div className="">
    <a
      href={product.ProdUrl ? product.ProdUrl : urlStoreIntl}
      target="_blank"
    >
      <button className="button">comprar</button>
    </a></div>
  </div>
  )
}

export default TechSpecs