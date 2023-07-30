
import Link from "next/link";
import ProductDetail from "./ProductDetails";
import Image from "next/image";


const Thumbnail = ({ product }) => {

  return (
    <Link
      href={`/${product._id}`}
      className={`relative  min-w-[180px] cursor-pointer transition duration-200 ease-out h-70 md:h-70 md:min-w-[260px] md:hover:scale-105`}
    >
      <img
      src="https://drive.google.com/uc?export=view&id=14aF7wb2iYhxCTDwhj2UT89aFbbcf1eqA"

        className="rounded-sm md:rounded relative "
        alt="imagen de tapa"
        width={200}
        height={200}
    />
    

    {product.discountPercentage !==0 && (<div className="font-xs px-2 bg-gris text-rojo absolute top-0 right-0 shadow-sm hover:text-white">  {product.discountPercentage}% off </div>) } 
     </Link>
  );
};

export default Thumbnail;