import BackButtonAdmin from "@/app/components/BackButtonAdmin";
import { createProduct } from "@/lib/mongo/products";
import { addProduct } from "@/app/actions/serverActions"
import { getAllProducts } from "@/lib/mongo/products";
import BotonCrearNvoProducto from "@/app/components/BotonCrearNvoProducto"
import ToggleCrear from "@/app/components/ToggleCrear"


export const dynamic = "force-dynamic";

async function  page() {
const {products} = await getAllProducts()

const genresRaw = await (products.map(it=> it.genre)).filter(it=>it !== null )
const genresClean = [...new Set(genresRaw)]




  return (
    <div>
    <BackButtonAdmin />
      <h1 className="text-center font-bold text-3xl mt-4">
        Create New Product
      </h1>
   
      <div className="mt-4 w-full px-2">
        <form action={ addProduct } className="flex flex-col items-start space-y-2 w-[90vw] mx-auto">
          <label>
            codeDux:
            <input type="text" name="codeDUX" className="inputField" />
          </label>
          <label>
            ISBN: <input type="text" name="ISBN" className="inputField" />
          </label>
          <label>
            genero: <select> {genresClean.map(it=>  <option value={it} key={it}>{it}</option> )} </select>
          </label>
          <label>
            título: <input type="text" name="title" className="inputField" />
          </label>
          <label>
            autor/es: <input type="text" name="author" className="inputField" />
          </label>
          <label>
            url Internacional: <input type="text" name="urlIntl" className="inputField" />
          </label>
          <label>
            url Local: <input type="text" name="urlLocal" className="inputField" />
          </label>
          <label>
            código de color: <input type="text" name="colorCode" className="inputField" placeholder="#xxxxxx" />
          </label>
          <label>
            techSpecs: <textarea type="text" name="techSpecs" className="inputField" />
          </label>
          <label>
            authorSpecs: <textarea type="text" name="authorSpecs" className="inputField" />
          </label>
          <label>
            review: <textarea type="text" name="review" className="inputField" />
          </label>
          <div className=" grid grid-cols-2 mx-auto w-full ">

   

          <ToggleCrear />
          <label className="flex items-center ">
            agotado?: <input type="checkbox" name="deprecated"  className="inputField scale-50" />
          </label>

          <label className="flex items-center">
            se muestra?: <input type="checkbox" name="show" className="inputField scale-50" />
          </label>
          
          <label className="flex items-center">
            es digital?: <input type="checkbox" name="digital" className="inputField scale-50"/>
          </label>
          <label className="flex items-center">
            es combo?: <input type="checkbox" name="combo" className="inputField scale-50" />
          </label>
         
          <label className="flex items-center">
            destacado: <input type="checkbox" name="highlighted" className="inputField scale-50" />
          </label>
          <label className="flex items-center">
            es nuevo?: <input type="checkbox" name="new_" className="inputField scale-50" />
          </label>
         
          <label className="flex items-center">
            es una colección?: <input type="checkbox" name="isColeccion" className="inputField scale-50" />
          </label>
          <label className="flex items-center">
            es un combo?: <input type="checkbox" name="isCombo" className="inputField scale-50" />
          </label>
          </div>
        
          <label>
            Si es una colección, qué códigos DUX contiene?: <input type="text" name="containsDUXCode" className="inputField" placeholder={`["cc255", "cc152"]`} />
          </label>
          <label>
          Si es una colección, qué títulos contiene?:
            <input type="text" name="contains" className="inputField" placeholder="esto no se usa"/>
          </label>
          <label>
            stock: <input type="number" name="stock" className="inputField" placeholder="0"/>
          </label>
          <label>
            qué porcentaje de descuento aplica?:
            <input
              type="number"
              name="discountPercentage"
              className="inputField"
              placeholder="0"
              
    
            />
          </label>
          <label>
            precio ARG:
            <input type="number" name="priceTN" className="inputField" placeholder="0" step="0.01"/>
          </label>
          <label>
            precio MERCADOLIBRE:
            <input type="number" name="priceML" className="inputField" placeholder="0" step="0.01" />
          </label>
          <label>
            precio U$S:
            <input type="number" name="priceUS" className="inputField" placeholder="0" step="0.01"/>
          </label>
          <label>
            peso: <input type="number" name="kg" className="inputField" placeholder="0" step="0.001"/>
          </label>
          <label>
            x: <input type="number" name="x" className="inputField"placeholder="0" />
          </label>
          <label>
            y: <input type="number" name="y" className="inputField" placeholder="0"/>
          </label>
          <label>
            z: <input type="number" name="z" className="inputField" placeholder="0"/>
          </label>
          <label>
            imagen front:
            <input type="text" name="imgFront" className="inputField" placeholder="pegar sólo ID aqui (cadena de 27 caracteres)"/>
          </label>
          <label>
          
            imagen back: <input type="text" name="imgBack" className="inputField" placeholder="pegar sólo ID aqui (cadena de 27 caracteres)"/>
          </label>
          <label>
            link GoogleDocs:
            <input type="text" name="urlGoogleDoc" className="inputField" />
          </label>
          <label>
            clave: <input type="text" name="key" className="inputField" />
          </label>
<div className="w-full flex justify-center py-4">
<BotonCrearNvoProducto />
          <button className="button" >CREAR NUEVO PRODUCTO</button></div>
        </form>
      </div>
    </div>
  );
}

export default page;
