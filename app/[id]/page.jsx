import { getProductById } from "@/lib/mongo/products";
import ProductDetails from "../components/ProductDetails";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
import Row from "../components/Row";

export default async function detailById({ params }) {
  const product = await getProductById(params.id);

  return (
    <div>

      <Link href="/">
        <button className="flex items-center ml-4 text-sm cursor-pointer text-gray-500 hover:text-black">
          <IoChevronBackOutline className="inline" />
          back
        </button>
      </Link>

      <ProductDetails product={product.product} />

            {/* Otros libros de la misma colección */}
            
    </div>
  );
}
