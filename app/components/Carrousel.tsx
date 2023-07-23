"use client"
import { Fragment, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Carrousel({ product }: { product: Product }) {
     const [imgSource, setImgSource] = useState(true)

  return (
    <div>
      <div className=" w-4/5 mx-auto">

        {product.imgFront && product.imgBack &&
        <div className="relative">
            <BiChevronLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-25 transition hover:scale-125 group-hover:opacity-100" onClick={()=>setImgSource(prev=>!prev)}/>
        <img src={imgSource? product.imgFront : product.imgBack} width={800} height={800} onClick={()=>setImgSource(prev=>!prev)} alt="book cover"/>
        <BiChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-25 transition hover:scale-125 group-hover:opacity-100"
          onClick={()=>setImgSource(prev=>!prev)}
        /></div>}

        {!product.imgBack && <img src={product.imgFront} width={800} height={800} alt="book cover" />}

        {!product.imgFront && <img src={product.imgBack} width={800} height={800} alt="book cover" />}
      </div>
    </div>
  );
}

export default Carrousel;
