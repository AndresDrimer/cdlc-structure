import { getAllProducts, getProductById, getSameGenre } from "@/lib/mongo/products";
import ProductDetails from "@/app/components/ProductDetails";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
import Row from "@/app/components/Row";
import Toggler from "@/app/components/Toggler";

import DetailShow from "@/app/components/DetailShow.jsx";
import { PiCheckBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import BackButton from "@/app/components/BackButtonAdmin";
import { IoMdWarning } from "react-icons/io";
import Carrousel from "@/app/components/Carrousel";



///////////////////////////////////////////////////////</div>

export default async function pageProductById({ params }) {
  const { product } = await getProductById(params.id);
  const id = params.id


  return (




    
    <div>
      <BackButton />
      {
        <div className="border-2 mt-4 mx-4 px-2">
          <p>borrar</p>
          <p>editar</p>

      <Carrousel product={product} />
          <div className="px-4">
            <div className="flex">
              <h2 className="font-bold text-2xl uppercase">{product.title}</h2>
              <div className="flex flex-col items-end">
             
              </div>
            </div>
            <div>
            <div className="flex items-center">
              <p className="mt-4">se muestra en la tienda? </p>
              <div className="border-2 rounded mx-14 py-2">
                {" "}
                {product.show ? (
                  <PiCheckBold className="fill-green-500 min-w-24" />
                ) : (
                  <ImCross className="fill-rojo" />
                )}
              </div>
            </div>
            </div>
            <br />
            <p>Product details</p>
            <ul className="w-5/6 ml-6 text-xs pb-4 break-words">
              <li>
                <span className="font-bold">_id:</span> {product._id}{" "}
              </li>
              <li>
                <span className="font-bold">codeDUX:</span> {product.codeDUX}{" "}
              </li>
              <li>
                <span className="font-bold">ISBN:</span> {product.ISBN}
              </li>
              <li>
                <span className="font-bold">genre:</span> {product.genre}
              </li>
              <li>
                <span className="font-bold">title:</span> {product.title}
              </li>
              <li>
                <span className="font-bold">author:</span> {product.author}
              </li>
              <li>
                <span className="font-bold">urlIntl:</span> {product.urlIntl}
              </li>
              <li>
                <span className="font-bold">urlLocal:</span> {product.urlLocal}
              </li>
              <li>
                <span className="font-bold">colorCode:</span>{" "}
                {product.colorCode}
              </li>
              <li>
                <span className="font-bold">techSpecs: </span>
                {product.techSpecs}
              </li>
              <li>
                <span className="font-bold">authorSpecs:</span>{" "}
                {product.authorSpecs}
              </li>
              <li>
                <span className="font-bold">review:</span> {product.review}
              </li>
              <li>
                <span className="font-bold">deprecated:</span>{" "}
                {product.deprecated}
              </li>
              <li>
                <span className="font-bold">show:</span>
                {product.show}
              </li>
              <li>
                <span className="font-bold">digital:</span> {product.digital}
              </li>
              <li>
                <span className="font-bold">combo:</span> {product.combo}
              </li>
              <li>
                <span className="font-bold">highlighted:</span>{" "}
                {product.highlighted}
              </li>
              <li>
                <span className="font-bold">new: </span>
                {product.new}
              </li>
              <li>
                <span className="font-bold">isColeccion:</span>{" "}
                {product.isColeccion}
              </li>
              <li>
                <span className="font-bold">isCombo:</span> {product.isCombo}
              </li>
              <li>
                <span className="font-bold">containsDUXCode: </span>
                {product.containsDUXCode}
              </li>
              <li>
                <span className="font-bold">contains: </span>
                {product.contains}
              </li>
              <li>
                <span className="font-bold">stock:</span> {product.stock}
              </li>
              <li>
                <span className="font-bold">discountPercentage:</span>{" "}
                {product.discountPercentage}
              </li>
              <li>
                <span className="font-bold">priceTN: </span>
                {product.priceTN}
              </li>
              <li>
                <span className="font-bold">priceML:</span> {product.priceML}
              </li>
              <li>
                <span className="font-bold">priceUS:</span> {product.priceUS}
              </li>
              <li>
                <span className="font-bold">kg: </span>
                {product.kg}
              </li>
              <li>
                <span className="font-bold">x:</span> {product.x}
              </li>
              <li>
                <span className="font-bold">y:</span> {product.y}
              </li>
              <li>
                <span className="font-bold">z:</span> {product.z}
              </li>
              <li>
                <span className="font-bold">imgFront: </span>
                {product.imgFront}
              </li>
              <li>
                <span className="font-bold">imgBack:</span> {product.imgBack}
              </li>
              <li>
                <span className="font-bold">urlGoogleDoc:</span>{" "}
                {product.urlGoogleDoc}
              </li>
              <li>
                <span className="font-bold">key: </span>
                {product.key}
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  );
}
