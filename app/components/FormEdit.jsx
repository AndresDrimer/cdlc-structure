"use client";
import { useState } from "react";
import Carrousel from "./Carrousel";
import { updateProduct } from "@/app/actions/serverActions";


//corregir para todos que pasa si no le llega valor, que sea al menos undefined, no puede ser vacio
function FormEdit({ product, genresClean }) {
  const [codeDUX, setCodeDUX] = useState(product.codeDUX || "");
  const [ISBN, setISBN] = useState(product.ISBN || "");
  const [genre, setGenre] = useState(product.genre);
  const [title, setTitle] = useState(product.title || "");
  const [author, setAuthor] = useState(product.author || "");
  const [urlIntl, setUrlIntl] = useState(product.urlIntl || "");
  const [urlLocal, setUrlLocal] = useState(product.urlLocal || "");
  const [colorCode, setColorCode] = useState(product.colorCode || "");
  const [techSpecs, setTechSpecs] = useState(product.techSpecs || "");
  const [authorSpecs, setAuthorSpecs] = useState(product.authorSpecs || "");
  const [review, setReview] = useState(product.review || "");
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
  const [contains, setContains] = useState(product.contains);
  const [stock, setStock] = useState(product.stock);
  const [discountPercentage, setDiscountPercentage] = useState(
    product.discountPercentage
  );
  const [priceTN, setPriceTN] = useState(product.priceTN || undefined);
  const [priceML, setPriceML] = useState(product.priceML);
  const [priceUS, setPriceUS] = useState(product.priceUS);
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
      {
        <div className="border-2 mt-4 mx-4 px-2">
          <p>borrar</p>
          <p>editar</p>

          <Carrousel product={product} />
          <div className="px-4">
            <p>Product details</p>
            <div className="mt-4 w-full px-2">
              <form
                action={updateProduct}
                className="flex flex-col items-start space-y-2 w-[90vw] mx-auto"
              >
                <label>
                  codeDux:
                  <input
                    type="text"
                    name="codeDUX"
                    className="inputField"
                    value={codeDUX}
                    onChange={(e) => setCodeDUX(e.target.value)}
                  />
                </label>
                <label>
                  ISBN:{" "}
                  <input
                    type="text"
                    name="ISBN"
                    className="inputField"
                    value={ISBN}
                    onChange={(e) => setISBN(e.target.value)}
                  />
                </label>
                <label>
                  genero:
                  <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
                 
                    {genresClean.map((it) => it !== it.genre && (
                      <option value={it} key={it}>
                        {it}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  título:
                  <input
                    type="text"
                    name="title"
                    className="inputField"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label>
                  autor/es:{" "}
                  <input
                    type="text"
                    name="author"
                    className="inputField"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </label>
                <label>
                  url Internacional:{" "}
                  <input
                    type="text"
                    name="urlIntl"
                    className="inputField"
                    value={urlIntl}
                    onChange={(e) => setUrlIntl(e.target.value)}
                  />
                </label>
                <label>
                  url Local:{" "}
                  <input
                    type="text"
                    name="urlLocal"
                    className="inputField"
                    value={urlLocal}
                    onChange={(e) => setUrlLocal(e.target.value)}
                  />
                </label>
                <label>
                  código de color:{" "}
                  <input
                    type="text"
                    name="colorCode"
                    className="inputField"
                    
                    value={colorCode}
                    onChange={(e) => setColorCode(e.target.value)}
                  />
                </label>
                <label>
                  techSpecs:{" "}
                  <textarea
                    type="text"
                    name="techSpecs"
                    className="inputField"
                    value={techSpecs}
                    onChange={(e) => setTechSpecs(e.target.value)}
                  />
                </label>
                <label>
                  authorSpecs:{" "}
                  <textarea
                    type="text"
                    name="authorSpecs"
                    className="inputField"
                    value={authorSpecs}
                    onChange={(e) => setAuthorSpecs(e.target.value)}
                  />
                </label>
                <label>
                  review:{" "}
                  <textarea
                    type="text"
                    name="review"
                    className="inputField"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </label>
                <div className=" grid grid-cols-2 mx-auto w-full ">
                  <label className="flex items-center ">
                    agotado?:
                    <input
                      type="checkbox"
                      name="deprecated"
                      className="inputField scale-50"
                      value="deprecated"
                    />
                  </label>
                  <label className="flex items-center">
                    se muestra?:{" "}
                    <input
                      type="checkbox"
                      name="show"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>

                  <label className="flex items-center">
                    es digital?:{" "}
                    <input
                      type="checkbox"
                      name="digital"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>
                  <label className="flex items-center">
                    es combo?:{" "}
                    <input
                      type="checkbox"
                      name="combo"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>

                  <label className="flex items-center">
                    destacado:{" "}
                    <input
                      type="checkbox"
                      name="highlighted"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>
                  <label className="flex items-center">
                    es nuevo?:{" "}
                    <input
                      type="checkbox"
                      name="new_"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>

                  <label className="flex items-center">
                    es una colección?:{" "}
                    <input
                      type="checkbox"
                      name="isColeccion"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>
                  <label className="flex items-center">
                    es un combo?:{" "}
                    <input
                      type="checkbox"
                      name="isCombo"
                      className="inputField scale-50"
                      value="true"
                    />
                  </label>
                </div>

                <label>
                  Si es una colección, qué códigos DUX contiene?:{" "}
                  <input
                    type="text"
                    name="containsDUXCode"
                    className="inputField"
                    value={containsDUXCode}
                    onChange={(e) => setContainsDUXCode(e.target.value)}
                  />
                </label>
                <label>
                  Si es una colección, qué títulos contiene?:
                  <input
                    type="text"
                    name="contains"
                    className="inputField"
                    value={contains}
                    onChange={(e) => setContains(e.target.value)}
                  />
                </label>
                <label>
                  stock:{" "}
                  <input
                    type="number"
                    name="stock"
                    className="inputField"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </label>
                <label>
                  qué porcentaje de descuento aplica?:
                  <input
                    type="number"
                    name="discountPercentage"
                    className="inputField"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                  />
                </label>
                <label>
                  precio ARG:
                  <input
                    type="number"
                    name="priceTN"
                    className="inputField"
                    step="0.01"
                    value={priceTN}
                    onChange={(e) => setPriceTN(e.target.value)}
                  />
                </label>
                <label>
                  precio MERCADOLIBRE:
                  <input
                    type="number"
                    name="priceML"
                    className="inputField"
                    step="0.01"
                    value={priceML}
                    onChange={(e) => setPriceML(e.target.value)}
                  />
                </label>
                <label>
                  precio U$S:
                  <input
                    type="number"
                    name="priceUS"
                    className="inputField"
                    step="0.01"
                    value={priceUS}
                    onChange={(e) => setPriceUS(e.target.value)}
                  />
                </label>
                <label>
                  peso:{" "}
                  <input
                    type="number"
                    name="kg"
                    className="inputField"
                    step="0.001"
                    value={kg}
                    onChange={(e) => setKg(e.target.value)}
                  />
                </label>
                <label>
                  x:{" "}
                  <input
                    type="number"
                    name="x"
                    className="inputField"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                  />
                </label>
                <label>
                  y:{" "}
                  <input
                    type="number"
                    name="y"
                    className="inputField"
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                  />
                </label>
                <label>
                  z:{" "}
                  <input
                    type="number"
                    name="z"
                    className="inputField"
                    value={z}
                    onChange={(e) => setZ(e.target.value)}
                  />
                </label>
                <label>
                  imagen front - pegar sólo ID, que es una cadena de 27
                  caracteres:
                  <input
                    type="text"
                    name="imgFront"
                    className="inputField"
                    value={imgFront}
                    onChange={(e) => setImgFront(e.target.value)}
                  />
                </label>
                <label>
                  imagen back - pegar sólo ID, que es una cadena de 27
                  caracteres:{" "}
                  <input
                    type="text"
                    name="imgBack"
                    className="inputField"
                    value={imgBack}
                    onChange={(e) => setImgBack(e.target.value)}
                  />
                </label>
                <label>
                  link GoogleDocs:
                  <input
                    type="text"
                    name="urlGoogleDoc"
                    className="inputField"
                    value={urlGoogleDoc}
                    onChange={(e) => setUrlGoogleDrive(e.target.value)}
                  />
                </label>
                <label>
                  clave:{" "}
                  <input
                    type="text"
                    name="key"
                    className="inputField"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                  />
                </label>
                <div className="w-full flex justify-center py-4">
                  <button className="button" >EDITAR PRODUCTO</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default FormEdit;
