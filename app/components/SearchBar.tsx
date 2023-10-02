"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
//this one is going to be on client side, because it a search manually written from user

function SearchBar({ products }: { products: Product[] }) {
  const router = useRouter();
  const [termSearched, setTermSearched] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
     const productSelected = products.filter(
      (product) => product.title === termSearched
    ); //this returns an array, that´s why i call it [0] on next line 
      if(!productSelected) {
        console.log("libro no existe")
        setTermSearched("")
        return;
      }

    if(productSelected && productSelected[0]?._id){  
    router.push(`/${productSelected[0]._id}`);
    
  }
  console.log("ese titulo esta mal escrito")
  setTermSearched("")
   return;
  }


  
  return (
    <div className="border-2 w-full">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="ingrese título"
          className="w-full focus:outline-gris indent-1"
          onChange={(e) => setTermSearched(e.target.value)}
          value={termSearched}
        />
      </form>
    </div>
  );
}

export default SearchBar;
