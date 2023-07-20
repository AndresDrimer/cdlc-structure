import Image from "next/image";
import Link from "next/link";


const Thumbnail = ({ product }) => {
const updatedImgUrlFront = product.updatedImgUrlFront

const formatoComoSiAnda = "https://drive.google.com/uc?export=view&id=17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV"
const comoViene ="https://drive.google.com/file/d/17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV/view?usp=sharing"

  return (
    <Link
      href={`/${product._id}`}
      className={`relative h-70 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-70 md:min-w-[260px] md:hover:scale-105`}
    >
      <img
      src={product.imgFront}
        className="rounded-sm object-cover md:rounded"
        alt="imagen de tapa"
    />
    </Link>
  );
};

export default Thumbnail;