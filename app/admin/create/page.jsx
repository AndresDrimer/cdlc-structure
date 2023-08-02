import BackButtonAdmin from "@/app/components/BackButtonAdmin";
import { createProduct } from "@/lib/mongo/products";


function page() {

const addProduct = async (e) => {
"use server"
const codeDUX = e.get("codeDUX").toString()

const newProduct= {
  codeDUX,
};
if (!codeDUX) return;
createProduct(codeDUX)
console.log("done")

}
  return (
    <div>
    <BackButtonAdmin />
      <h1 className="text-center font-bold text-3xl mt-4">
        Create New Product
      </h1>

      <div className="flex justify-center mt-4 ">
        <form action={addProduct} className="flex flex-col items-start space-y-4 ">
          <label>
            codeDux:
            <input type="text" name="codeDUX" className="inputField" />
          </label>
          <label>
            ISBN: <input type="text" name="isbn" className="inputField" />
          </label>
          <label>
            genre: <input type="text" name="genre" className="inputField" />
          </label>
          <label>
            title: <input type="text" name="title" className="inputField" />
          </label>
          <label>
            author: <input type="text" name="author" className="inputField" />
          </label>
          <label>
            urlIntl: <input type="text" name="urlIntl" className="inputField" />
          </label>
          <label>
            urlLocal: <input type="text" name="urlLocal" className="inputField" />
          </label>
          <label>
            colorCode: <input type="text" name="colorCode" className="inputField" />
          </label>
          <label>
            techSpecs: <input type="text" name="techSpecs" className="inputField" />
          </label>
          <label>
            authorSpecs: <input type="text" name="authorSpecs" className="inputField" />
          </label>
          <label>
            review: <input type="text" name="review" className="inputField" />
          </label>
          <label>
            deprecated: <input type="checkbox" name="deprecated" className="inputField" />
          </label>
          <label>
            show: <input type="checkbox" name="show" className="inputField" />
          </label>
          <label>
            digital: <input type="checkbox" name="digital" className="inputField" />
          </label>
          <label>
            combo: <input type="checkbox" name="combo" className="inputField" />
          </label>
          <label>
            highlighted: <input type="checkbox" name="highlighted" className="inputField" />
          </label>
          <label>
            new: <input type="checkbox" name="new_" className="inputField" />
          </label>
          <label>
            isColeccion: <input type="checkbox" name="isColeccion" className="inputField" />
          </label>
          <label>
            isCombo: <input type="checkbox" name="isCombo" className="inputField" />
          </label>
          <label>
            containsDUXCode: <input type="text" name="containsDUXCode" className="inputField" />
          </label>
          <label>
            contains:
            <input type="text" name="contains" className="inputField" />
          </label>
          <label>
            stock: <input type="number" name="stock" className="inputField" />
          </label>
          <label>
            discountPercentage:
            <input
              type="number"
              name="discountPercentage"
              className="inputField"
            />
          </label>
          <label>
            priceTN:
            <input type="number" name="priceTN" className="inputField" />
          </label>
          <label>
            priceML:
            <input type="number" name="priceML" className="inputField" />
          </label>
          <label>
            priceUS:
            <input type="number" name="priceUS" className="inputField" />
          </label>
          <label>
            kg: <input type="number" name="kg" className="inputField" />
          </label>
          <label>
            x: <input type="number" name="x" className="inputField" />
          </label>
          <label>
            y: <input type="number" name="y" className="inputField" />
          </label>
          <label>
            z: <input type="number" name="z" className="inputField" />
          </label>
          <label>
            imgFront:
            <input type="text" name="imgFront" className="inputField" />
          </label>
          <label>
          
            imgBack: <input type="text" name="imgBack" className="inputField" />
          </label>
          <label>
            urlGoogleDoc:
            <input type="text" name="urlGoogleDoc" className="inputField" />
          </label>
          <label>
            key: <input type="text" name="key" className="inputField" />
          </label>

          <button className="button">send</button>
        </form>
      </div>
    </div>
  );
}

export default page;
