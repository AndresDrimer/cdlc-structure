import Image from "next/image"
import logo from "../../public/logo-no-bck.png"
import Link from "next/link"
import { RxAvatar } from "react-icons/rx";
import { RiSettings3Fill } from "react-icons/ri";

import argentinaLogo from "../../public/argentina.png"
import worldLogo from "../../public/world.png"

function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 mt-2 shadow-xl">
        <div className="flex justify-center"><Link href="/"><Image src={logo} width={150} priority alt="logo" className="w-20 md:w-32 hover:scale-110 transition duration-300"/></Link></div>
<div className="flex space-x-4">
        <div className="md:hidden"><RxAvatar /></div>
        <div><Image src={argentinaLogo} width={16} height={16} alt="location logo" /></div>
        <div className=""><RiSettings3Fill className="text-gris scale-110"/></div>
        
        <div className="hidden md:flex uppercase"><p className="">crear cuenta |</p><p>entrar </p></div>
    </div>
    </header>
  )
}

export default Navbar