"use client"
import Link from 'next/link'
import React from 'react'

function BotonCrear() {
  return (
    <button className='button'><Link href={"/admin/create"}> + crear nuevo producto</Link></button>
  )
}

export default BotonCrear