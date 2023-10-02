"use client";
import DetailShow from "@/app/components/DetailShow"
import BotonDetalles from "@/app/components/BotonDetalles";
import { PiCheckBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { useAdminContext } from "../contexts/adminContext";
import { GoTrash } from "react-icons/go";
import { RiEdit2Line } from "react-icons/ri";
import { TfiZoomIn } from "react-icons/tfi";
import { delProduct } from "@/app/actions/serverActions";
import Link from "next/link";

function AdminProducts({ products }) {
  const { showDetailContext, setshowDetailContext } = useAdminContext();
  const prodsSorted = products.sort((a,b)=>a.title-b.title).sort((it) => !it.show - it.show);



 
  return (
    <div>
      {showDetailContext ? (
        <DetailShow prod={products}/>
      
     
      ) : (
        prodsSorted.map((it) => (
          <div className="border-2 flex justify-between" key={it.codeDUX}>
            <div>
              <h2 className="font-bold text-md md:text-2xl uppercase">
                {it.title}
              </h2>
              {it.author && (
                <p className="font-normal normal-case"> de {it.author} </p>
              )}
              {it.isCombo && <p className="font-normal normal-case"> combo </p>}
              {it.isColeccion && (
                <p className="font-normal normal-case"> coleccion {it.genre} </p>
              )}
            </div>
            <div className="flex justify-end flex-col">
              <div className="flex justify-around">
                  
              {/* encapsular con una funcion que pida confirmar en un toast, y ahi sí mande delProduct, en el toast*/}
                <button className="border-2 px-4 py-2" onClick={()=>delProduct(it._id)}>
                  <GoTrash className="fill-rojo scale-150" />
                </button>


                <Link href={`/admin/list/${it._id}`} target="_blank">
                <button className="border-2 px-4 py-2">
                  <TfiZoomIn className="scale-150" />
                </button></Link>
                <button className="border-2 px-4 py-2">
                  <RiEdit2Line className="scale-150" />
                </button>
              </div>
              <p className="inline  border-2 px-2">
                {it.digital ? "digital" : "físico"}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminProducts;
