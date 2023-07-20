
import Link from "next/link";


const Thumbnail = ({ product }) => {

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