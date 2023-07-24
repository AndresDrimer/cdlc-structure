import Image from "next/image";
import Logo from "../../public/logo-no-bck.png";
import { urlCdlcRevista } from "@/constants/constant";

import { BsTelephone, BsBook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";

function Footer() {
  const since = new Date().getFullYear() - 2003;

  return (
    <footer className="text-xs mt-4">

      
      <div className="flex w-full justify-center items-center">
        <div className="w-3/4">
          <a
            href={urlCdlcRevista}
            target="_blank"
            className="cursor-pointer flex "
          >
            <div className="flex items-center space-x-2">
              {" "}
              <BsBook />
              <p className="hover:font-bold ">
                {" "}
                Revista CdlC - {`${since} años!`}
              </p>
            </div>
          </a>
          <div className="flex space-x-2 items-center">
            <BsTelephone />
            <p>+549 116.493.0517</p>
          </div>
          <div className="flex space-x-2">
            <CiMail />
            <p className="break-all">librerias@cafedelasciudades.com.ar</p>
          </div>

          <div className="flex space-x-2">
            <BiHomeAlt2 className="w-4"/>{" "}
            <p className="break-inside-auto">
              Godoy Cruz 1653 / La Ciudad Posible{" "}
              <span className="font-semibold">(sólo con cita previa)</span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center my-2">@ Café de las Ciudades {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
