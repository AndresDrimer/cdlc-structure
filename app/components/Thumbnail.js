import Image from "next/image";
import Link from "next/link";


const Thumbnail = ({ product }) => {
const updatedImgUrlFront = product.updatedImgUrlFront

const formatoComoSiAnda = "https://drive.google.com/uc?export=view&id=17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV"
const comoViene ="https://drive.google.com/file/d/17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV/view?usp=sharing"

  return (
    <Link
      href={`/`}
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
    
      <Image
      src="https://drive.google.com/uc?export=view&id=17S09rRqBexUp2rWRpIQk6CBjRdKyCEwV"
        className="rounded-sm object-cover md:rounded"
        fill
        alt="movie poster"
    />
    </Link>
  );
};

export default Thumbnail;