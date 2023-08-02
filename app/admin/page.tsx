import Link from 'next/link'
import React from 'react'

function AdminPage() {
  return (
    <section>
        <div>
            <h1>Admin protected page</h1>
        </div>

        <div>
        <h1>Hello "name"</h1>

        <div className='flex flex-col justify-around w-2/4 mx-auto lg:w-1/4'>
           <button className='button'><Link href="/admin/list" > ver productos </Link></button>
          <button className='button'><Link href="/admin/create"> cargar un producto nuevo </Link></button>
           <button className='button'><Link href="/admin/edit"> editar un producto </Link></button>
            <button className='button bg-red-400 hover:bg-rojo'><Link href="/admin/delete"> borrar un producto </Link></button>

        </div>
        </div>



    </section>
  )
}

export default AdminPage