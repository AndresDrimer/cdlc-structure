import { getProductById, getSameGenre } from "@/lib/mongo/products";
import ProductDetails from "../components/ProductDetails";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
import Row from "../components/Row";
import Toggler from "../components/Toggler";

export default async function detailById({ params }) {
  const {product} = await getProductById(params.id);
  const {sameGenreProducts} = await getSameGenre(product.genre, product._id)


  return (
    <div className="">
<div className="mt-8">
      <Link href="/">
        <button className="flex items-center ml-4 text-sm cursor-pointer text-gray-500 hover:text-black">
          <IoChevronBackOutline className="inline" />
          back
        </button>
      </Link>
</div>
<Toggler />
      <ProductDetails product={product} />

            {/* Otros libros de la misma colección */}
          <Row products={sameGenreProducts} title="recomendados" />
    </div>
  );
}
