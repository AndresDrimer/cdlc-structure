"use client"
import { deleteProduct } from "@/lib/mongo/products";
import { useRouter } from "next/router";
import { GoTrash } from "react-icons/go";
import { startTransition, useTransition } from 'react'
import handleDelete from "@/app/actions/serverActions"


function DeleteButton({ id }) {
  let [isPending, startTransition] = useTransition()
  
  function handleClick(){
    startTransition(()=>handleDelete(id))
  }
  return (
    <div>
    
    <button className="button bg-red-400 hover:bg-red border-2 border-black" onClick={()=>handleClick }><GoTrash /></button>
    
    </div>
  )
}

export default DeleteButton