"use client";
import { useState } from "react";

function ImageCollage({ product }: { product: Product }) {
  const imgSrc = product.imgFront ? product.imgFront : product.imgBack;
  const [imgChosen, setImgChosen] = useState(imgSrc);
  return (
    <div className="flex-1">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={product.imgFront}
            alt=""
            onClick={() => setImgChosen(product.imgFront)}
            className="cursor-pointer"
          />
          <img
            src={product.imgBack}
            alt=""
            onClick={() => setImgChosen(product.imgBack)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-2/3 overflow-scroll">
          <img
            src={imgChosen}
            alt=""
            className="hover:scale-[1.75] hover:cursor-zoom-in transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCollage;
