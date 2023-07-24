
import Image from "next/image";
import Link from "next/link";
import ProductDetail from "./ProductDetails";


const Thumbnail = ({ product }) => {

  return (
    <Link
      href={`/${product._id}`}
      className={`relative h-70 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-70 md:min-w-[260px] md:hover:scale-105`}
    >
      <img
      src={product.imgFront}
        className="rounded-sm object-cover md:rounded relative"
        alt="imagen de tapa"
    />

    {product.discountPercentage !==0 && (<div className="font-xs px-2 bg-gris text-rojo absolute top-0 right-0 shadow-sm">  {product.discountPercentage}% off </div>) }  </Link>
  );
};

export default Thumbnail;