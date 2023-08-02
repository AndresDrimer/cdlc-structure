import { getAllProducts, getProductById } from "@/lib/mongo/products";
import BackButtonAdmin from "@/app/components/BackButtonAdmin";
export const dynamic= "force-dynamic" 

export default async function page() {
  const { products } = await getAllProducts();


  return (
    <div>
    <BackButtonAdmin />
      <h1 className="text-center font-bold text-3xl mt-4">Lista completa de Productos</h1>
      <h3 className="text-center">contiene {products.length} unidades</h3>
      <div>
        {products.map((it) => (
          <div key={it._id} className="border-2 mt-4">
            <ul className="w-5/6 ml-6">
              <li><span className="font-bold">_id:</span> {it._id} </li>
              <li><span className="font-bold">codeDUX:</span> {it.codeDUX} </li>
              <li><span className="font-bold">ISBN:</span> {it.ISBN}</li>
              <li><span className="font-bold">genre:</span> {it.genre}</li>
              <li><span className="font-bold">title:</span> {it.title}</li>
              <li><span className="font-bold">author:</span> {it.author}</li>
              <li><span className="font-bold">urlIntl:</span> {it.urlIntl}</li>
              <li><span className="font-bold">urlLocal:</span> {it.urlLocal}</li>
              <li><span className="font-bold">colorCode:</span> {it.colorCode}</li>
              <li><span className="font-bold">techSpecs: </span>{it.techSpecs}</li>
              <li><span className="font-bold">authorSpecs:</span> {it.authorSpecs}</li>
              <li><span className="font-bold">review:</span> {it.review}</li>
              <li><span className="font-bold">deprecated:</span> {it.deprecated}</li>
              <li><span className="font-bold">show:</span>{it.show}</li>
              <li><span className="font-bold">digital:</span> {it.digital}</li>
              <li><span className="font-bold">combo:</span> {it.combo}</li>
              <li><span className="font-bold">highlighted:</span> {it.highlighted}</li>
              <li><span className="font-bold">new: </span>{it.new}</li>
              <li><span className="font-bold">isColeccion:</span> {it.isColeccion}</li>
              <li><span className="font-bold">isCombo:</span> {it.isCombo}</li>
              <li><span className="font-bold">containsDUXCode: </span>{it.containsDUXCode}</li>
              <li><span className="font-bold">contains: </span>{it.contains}</li>
              <li><span className="font-bold">stock:</span> {it.stock}</li>
              <li><span className="font-bold">discountPercentage:</span> {it.discountPercentage}</li>
              <li><span className="font-bold">priceTN: </span>{it.priceTN}</li>
              <li><span className="font-bold">priceML:</span> {it.priceML}</li>
              <li><span className="font-bold">priceUS:</span> {it.priceUS}</li>
              <li><span className="font-bold">kg: </span>{it.kg}</li>
              <li><span className="font-bold">x:</span> {it.x}</li>
              <li><span className="font-bold">y:</span> {it.y}</li>
              <li><span className="font-bold">z:</span> {it.z}</li>
              <li><span className="font-bold">imgFront: </span>{it.imgFront}</li>
              <li><span className="font-bold">imgBack:</span> {it.imgBack}</li>
              <li><span className="font-bold">urlGoogleDoc:</span> {it.urlGoogleDoc}</li>
              <li><span className="font-bold">key: </span>{it.key}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
