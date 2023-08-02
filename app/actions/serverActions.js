"use server"

import { deleteProduct } from "@/lib/mongo/products"
import { revalidatePath } from "next/cache"

function serverActions() {
    
  async function handleDelete(id) {
       await delProduct(id) 
       revalidatePath("/admin/list")
      }
  
    
    
}

export default serverActions