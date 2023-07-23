import Image from "next/image"
import logo from "../../public/logo-no-bck.png"
import Link from "next/link"
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 shadow-xl">
        <div className="flex justify-center"><Link href="/"><Image src={logo} width={150} priority alt="logo" className="w-16 md:w-48 hover:scale-110 transition duration-300"/></Link></div>
<div>
        <div className="md:hidden"><RxAvatar /></div>
        
        <div className="hidden md:flex uppercase"><p className="">crear cuenta |</p><p>entrar </p></div>
    </div>
    </header>
  )
}

export default Navbar