import Image from "next/image"
import logo from "../../public/logo-no-bck.png"
import Link from "next/link"

function Navbar() {
  return (
    <header className="flex justify-center items-center shadow-xl">
        <div className="md:py-4 flex justify-center"><Link href="/"><Image src={logo} width={150} priority alt="logo" className="w-24 md:w-48 hover:scale-110 transition duration-300"/></Link></div>
    </header>
  )
}

export default Navbar