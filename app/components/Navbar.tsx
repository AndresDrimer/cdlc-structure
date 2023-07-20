import Image from "next/image"
import logo from "../../public/logo.jpg"

function Navbar() {
  return (
    <header className="flex justify-center items-center">
        <div className="py-4"><Image src={logo} width={100} priority alt="logo" className="hover:scale-110 transition duration-300"/></div>
    </header>
  )
}

export default Navbar