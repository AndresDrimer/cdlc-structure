import Link from 'next/link'
import React from 'react'

function AdminPage() {
  return (
    <section className=''>
        <div>
            <h1>Admin protected page</h1>
        </div>

      
        <h1>Hello "name"</h1>
 

        <div className='flex flex-col justify-around w-2/4 mx-auto lg:w-1/4'>
           <button className='button'><Link href="/admin/list" > productos </Link></button>
          <button className='button'><Link href="/"> users </Link></button>
          
      
        </div>



    </section>
  )
}

export default AdminPage