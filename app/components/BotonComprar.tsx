import React from 'react'

function BotonComprar({product}: {product: Product}) {
  return (
    <div className="mt-8">
        <a
          href={product.urlLocal ? product.urlLocal : product.urlIntl}
          target="_blank"
        >
          <button className="button">comprar</button>
        </a>
      </div>
  )
}

export default BotonComprar