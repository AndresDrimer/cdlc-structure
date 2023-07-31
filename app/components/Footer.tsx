import Image from "next/image";
import Logo from "../../public/logo-no-bck.png";
import LogoLCP from "../../public/logo-LCP.png";
import { urlCdlcRevista } from "@/constants/constant";

import { BsTelephone, BsBook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";

function Footer() {
  const since = new Date().getFullYear() - 2003;

  return (
    <footer className="text-xs mt-4">
      <div className="flex flex-col items-center md:flex-row md:justify-around lg:justify-center">
        <div className="flex justify-center items-center px-4 md:justify-start">
          {/*logo*/}
          <div className="">
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
              <BiHomeAlt2 className="w-4" />{" "}
              <p className="break-inside-auto">
                Godoy Cruz 1653 / La Ciudad Posible{" "}
                <span className="font-semibold">(sólo con cita previa)</span>
              </p>
            </div>
          </div>
        </div>
        {/*logo contenedor*/}

        <div className="flex space-x-8 mt-2 md:mt-0">
          {" "}
          <Image src={LogoLCP} width={50} height={50} alt="logo" />
          <Image src={Logo} width={50} height={50} alt="logo" />
        </div>
      </div>
      <hr className="border-gris mt-4" />
      <p className="my-2 text-gris text-center">
        @ Café de las Ciudades - {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
