import { getAllProducts, getProductById } from "@/lib/mongo/products";
import BackButtonAdmin from "@/app/components/BackButtonAdmin";
import { PiCheckBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import BotonDetalles from "@/app/components/BotonDetalles";
import AdminProducts from "@/app/components/AdminProducts"
import BotonCrear from "@/app/components/BotonCrear"
import { revalidatePath } from "next/cache";





export default async function page() {
  const { products } = await getAllProducts();
 

  return (
    <div>
      <BackButtonAdmin />
      <h1 className="text-center font-bold text-3xl mt-4">
        Lista completa de Productos
      </h1>
      <h3 className="text-center">contiene {products.length} unidades</h3>
        <div className="flex justify-center"> <BotonCrear /></div>  
      <div className="flex justify-center"><BotonDetalles /></div>
   
 
<AdminProducts products={products}/>
      </div>

  );
}
