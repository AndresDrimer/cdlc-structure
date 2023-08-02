import BackButtonAdmin from "@/app/components/BackButtonAdmin";
import { getAllProducts } from "@/lib/mongo/products";
import { revalidatePath } from "next/cache";
import React from "react";
import delProduct from "@/app/actions/serverActions"


// export const dynamic = "force-dynamic";

async function page() {
  const { products } = await getAllProducts();

 async function handleDelete(id){
 "use server"
  console.log("vamosMAL") 
  const dale = await delProduct(id)
   
  
  }

   return (
    <div>
      <BackButtonAdmin />
      <h1 className="text-center font-bold text-3xl mt-4">
        Borrar un Producto
      </h1>

      <div className="w-3/4 mx-auto flex flex-col justify-start  ">
        
        {products.map((it) => (
          <div className="flex items-center justify-between border-2 border-gris rounded-lg my-4 px-4" key={it._id}>
            <div className="">{it.title} <span className="text-gris text-xs">{it.codeDUX}</span> </div><div><form action={()=>handleDelete(it._id)}><button>del</button></form></div>
            
            {/*<DeleteButton id={it._id} className="w-10"/>*/}

          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
