import React from 'react'
import { ImCross } from 'react-icons/im'
import { PiCheckBold } from 'react-icons/pi'

function DetailShow({prod}) {
  return (
    <div>
          {prod.map((it) => (
            <div key={it._id} className="border-2 mt-4 mx-4 px-4">
            <div className='flex justify-center pt-4'>
              <img src={it.imgFront} width={200} height={200} alt="portada" /></div>
              <div>
                <div>
                  <h2 className="font-bold text-2xl uppercase">{it.title}</h2>
                  <div className="flex items-center">
                    <p className="">se muestra en la tienda? </p>
                    <div className="border-2 rounded mx-14 py-2">
                      {" "}
                      {it.show ? (
                        <PiCheckBold className="fill-green-500 min-w-24" />
                      ) : (
                        <ImCross className="fill-rojo" />
                      )}
                    </div>
                  </div>
                </div>
                <br />
                <p>Product details</p>
                <ul className="w-5/6 ml-6 text-xs pb-4 break-words px-2">
                  <li>
                    <span className="font-bold">_id:</span> {it._id}
                  </li>
                  <li>
                    <span className="font-bold">codeDUX:</span> {it.codeDUX}
                  </li>
                  <li>
                    <span className="font-bold">ISBN:</span> {it.ISBN}
                  </li>
                  <li>
                    <span className="font-bold">genre:</span> {it.genre}
                  </li>
                  <li>
                    <span className="font-bold">title:</span> {it.title}
                  </li>
                  <li>
                    <span className="font-bold">author:</span> {it.author}
                  </li>
                  <li>
                    <span className="font-bold">urlIntl:</span> {it.urlIntl}
                  </li>
                  <li>
                    <span className="font-bold">urlLocal:</span> {it.urlLocal}
                  </li>
                  <li>
                    <span className="font-bold">colorCode:</span> {it.colorCode}
                  </li>
                  <li>
                    <span className="font-bold">techSpecs: </span>
                    {it.techSpecs}
                  </li>
                  <li>
                    <span className="font-bold">authorSpecs:</span>{" "}
                    {it.authorSpecs}
                  </li>
                  <li>
                    <span className="font-bold">review:</span> {it.review}
                  </li>
                  <li>
                    <span className="font-bold">deprecated:</span>{" "}
                    {it.deprecated}
                  </li>
                  <li>
                    <span className="font-bold">show:</span>
                    {it.show}
                  </li>
                  <li>
                    <span className="font-bold">digital:</span> {it.digital}
                  </li>
                  <li>
                    <span className="font-bold">combo:</span> {it.combo}
                  </li>
                  <li>
                    <span className="font-bold">highlighted:</span>{" "}
                    {it.highlighted}
                  </li>
                  <li>
                    <span className="font-bold">new: </span>
                    {it.new}
                  </li>
                  <li>
                    <span className="font-bold">isColeccion:</span>{" "}
                    {it.isColeccion}
                  </li>
                  <li>
                    <span className="font-bold">isCombo:</span> {it.isCombo}
                  </li>
                  <li>
                    <span className="font-bold">containsDUXCode: </span>
                    {it.containsDUXCode}
                  </li>
                  <li>
                    <span className="font-bold">contains: </span>
                    {it.contains}
                  </li>
                  <li>
                    <span className="font-bold">stock:</span> {it.stock}
                  </li>
                  <li>
                    <span className="font-bold">discountPercentage:</span>{" "}
                    {it.discountPercentage}
                  </li>
                  <li>
                    <span className="font-bold">priceTN: </span>
                    {it.priceTN}
                  </li>
                  <li>
                    <span className="font-bold">priceML:</span> {it.priceML}
                  </li>
                  <li>
                    <span className="font-bold">priceUS:</span> {it.priceUS}
                  </li>
                  <li>
                    <span className="font-bold">kg: </span>
                    {it.kg}
                  </li>
                  <li>
                    <span className="font-bold">x:</span> {it.x}
                  </li>
                  <li>
                    <span className="font-bold">y:</span> {it.y}
                  </li>
                  <li>
                    <span className="font-bold">z:</span> {it.z}
                  </li>
                  <li>
                    <span className="font-bold">imgFront: </span>
                    {it.imgFront}
                  </li>
                  <li>
                    <span className="font-bold">imgBack:</span> {it.imgBack}
                  </li>
                  <li>
                    <span className="font-bold">urlGoogleDoc:</span>{" "}
                    {it.urlGoogleDoc}
                  </li>
                  <li>
                    <span className="font-bold">key: </span>
                    {it.key}
                  </li>
                </ul>
              </div>
            </div>
            
            
            ))
        }
            </div>)
}


export default DetailShow