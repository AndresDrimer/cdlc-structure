"use client";


import { getProductById } from "@/lib/mongo/products";
import { PiCheckBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import BackButton from "@/app/components/BackButtonAdmin";
import { useState } from "react";
import Carrousel from "@/app/components/Carrousel";

export default async function pageEditProductById({ params }) {
  
  const id = params.id;
  const { product } = await getProductById(params.id);
  console.log(product.title)

  const [codeDUX, setCodeDUX] = useState(product.codeDUX);
  const [ISBN, setISBN] = useState(product.ISBN);
  const [genre, setGenre] = useState(product.genre);
  const [title, setTitle] = useState(product.title);
  const [author, setAuthor] = useState(product.author);
  const [urlIntl, setUrlIntl] = useState(product.urlIntl);
  const [urlLocal, setUrlLocal] = useState(product.urlLocal);
  const [colorCode, setColorCode] = useState(product.colorCode);
  const [techSpecs, setTechSpecs] = useState(product.techSpecs);
  const [authorSpecs, setAuthorSpecs] = useState(product.authorSpecs);
  const [review, setReview] = useState(product.review);
  const [deprecated, setDeprecated] = useState(product.deprecated);
  const [show, setShow] = useState(product.show);
  const [digital, setDigital] = useState(product.digital);
  const [combo, setCombo] = useState(product.combo);
  const [highlighted, setHighlighted] = useState(product.highlighted);
  const [new_, setNew] = useState(product.new_);
  const [isColeccion, setIsColeccion] = useState(product.isColeccion);
  const [isCombo, setIsCombo] = useState(product.isCombo);
  const [containsDUXCode, setContainsDUXCode] = useState(
    product.containsDUXCode
  );
  const [stock, setStock] = useState(product.stock);
  const [discountPercentage, setDiscountPercentage] = useState(
    product.discountPercentage
  );
  const [priceTN, setPriceTN] = useState(product.priceTN);
  const [priceML, setPriceML] = useState(product.priceML);
  const [priceUS, setPriceUS] = useState(priceUS);
  const [kg, setKg] = useState(product.kg);
  const [x, setX] = useState(product.x);
  const [y, setY] = useState(product.y);
  const [z, setZ] = useState(product.z);
  const [imgFront, setImgFront] = useState(product.imgFront);
  const [imgBack, setImgBack] = useState(product.imgBack);
  const [urlGoogleDoc, setUrlGoogleDrive] = useState(product.urlGoogleDoc);
  const [key, setKey] = useState(product.key);

  return (
    <div>
      <BackButton />
      {
        <div className="border-2 mt-4 mx-4 px-2">
          <p>borrar</p>
          <p>editar</p>

          <Carrousel product={product} />
          <div className="px-4">
           

            <p>Product details</p>
            <form className="w-5/6 ml-6 text-xs pb-4 break-words">
              <label className="font-bold">
                codeDUX:
                <input
                  onChange={(e) => setCodeDUX(e.target.value)}
                  value={codeDUX}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                ISBN:
                <input
                  onChange={(e) => setISBN(e.target.value)}
                  value={ISBN}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                genre:
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                title:
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                author:
                <input
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                urlIntl:
                <input
                  onChange={(e) => setUrlIntl(e.target.value)}
                  value={urlIntl}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                urlLocal:
                <input
                  onChange={(e) => setUrlLocal(e.target.value)}
                  value={urlLocal}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                colorCode:
                <input
                  onChange={(e) => setColorCode(e.target.value)}
                  value={colorCode}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                techSpecs:
                <input
                  onChange={(e) => setTechSpecs(e.target.value)}
                  value={techSpecs}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                authorSpecs:
                <input
                  onChange={(e) => setAuthorSpecs(e.target.value)}
                  value={authorSpecs}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                review:
                <input
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                deprecated:
                <input
                  onChange={(e) => setDeprecated(e.target.value)}
                  value={deprecated}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                show:
                <input
                  onChange={(e) => setShow(e.target.value)}
                  value={show}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                digital:
                <input
                  onChange={(e) => setDigital(e.target.value)}
                  value={digital}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                combo:
                <input
                  onChange={(e) => setCombo(e.target.value)}
                  value={combo}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                highlighted:
                <input
                  onChange={(e) => setHighlighted(e.target.value)}
                  value={highlighted}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                new:
                <input
                  onChange={(e) => setNew(e.target.value)}
                  value={new_}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                isColeccion:
                <input
                  onChange={(e) => setIsColeccion(e.target.value)}
                  value={isColeccion}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                isCombo:
                <input
                  onChange={(e) => setIsCombo(e.target.value)}
                  value={isCombo}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                containsDUXCode:
                <input
                  onChange={(e) => setContainsDUXCode(e.target.value)}
                  value={containsDUXCode}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                contains:
                <input
                  onChange={(e) => setContains(e.target.value)}
                  value={contains}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                stock:
                <input
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                discountPercentage:
                <input
                  onChange={(e) => setDiscountPercentage(e.target.value)}
                  value={discountPercentage}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                priceTN:
                <input
                  onChange={(e) => setPriceTN(e.target.value)}
                  value={priceTN}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                priceML:
                <input
                  onChange={(e) => setPriceML(e.target.value)}
                  value={priceML}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                priceUS:
                <input
                  onChange={(e) => setPriceUS(e.target.value)}
                  value={priceUS}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                kg:
                <input
                  onChange={(e) => setKg(e.target.value)}
                  value={kg}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                x:
                <input
                  onChange={(e) => setX(e.target.value)}
                  value={x}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                y:
                <input
                  onChange={(e) => setY(e.target.value)}
                  value={y}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                z:
                <input
                  onChange={(e) => setZ(e.target.value)}
                  value={z}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                imgFront:
                <input
                  onChange={(e) => setImgFront(e.target.value)}
                  value={imgFront}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                imgBack:
                <input
                  onChange={(e) => setImgBack(e.target.value)}
                  value={imgBack}
                  className=""
                  type="text"
                />
              </label>{" "}
              {product.imgBack}
              <label className="font-bold">
                urlGoogleDoc:
                <input
                  onChange={(e) => setUrlGoogleDrive(e.target.value)}
                  value={urlGoogleDoc}
                  className=""
                  type="text"
                />
              </label>
              <label className="font-bold">
                key:
                <input
                  onChange={(e) => setKey(e.target.value)}
                  value={key}
                  className=""
                  type="text"
                />
              </label>
            </form>
          </div>
        </div>
      }
    </div>
  );
}
