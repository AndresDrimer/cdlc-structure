"use client"
import { useAdminContext } from "../contexts/adminContext";

export default function BotonDetalles() {
   
    
const { showDetailContext, setshowDetailContext } = useAdminContext()

    function handleClick(id){
       
        setshowDetailContext(prev=>!prev);
        console.log("tocado")
    }
  return (
    <div className="space-x-8 my-4"><button className={showDetailContext ? "underline font-bold" : undefined } onClick={()=>handleClick()}>ver resumen</button>
    <button className={showDetailContext ? "underline font-bold": undefined }  onClick={()=>handleClick()}>ver detalles</button></div>
  )
}
