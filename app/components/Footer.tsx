import Image from "next/image";
import Logo from "../../public/logo-no-bck.png";
import { urlCdlcRevista } from "@/constants/constant";

import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";

function Footer() {
    const since = (new Date().getFullYear())-2003
    
  return (
    <footer className="text-xs">
      <div className="flex w-full justify-center items-center shadow-2xl shadow-black">
        <div className=" w-1/2 flex justify-end">
          <Image src={Logo} width={100} height={100} alt="logo"/>
        </div>
        
        <div className="w-1/2">
           <div> <a href={urlCdlcRevista} target="_blank" className="cursor-pointer"><p className="hover:font-bold">Revista CdlC - {`${since} años!`}</p></a></div>
          <div className="flex space-x-2"><BsTelephone /><p>+549 116.493.0517</p></div>
          <div className="flex space-x-2"><CiMail /><p>librerias@cafedelasciudades.com.ar</p></div>

         <div className="flex space-x-2"><BiHomeAlt2 /> <p>Godoy Cruz 1653 / La Ciudad Posible <span className="font-semibold">(sólo con cita previa)</span></p></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
