import React from "react";
import { useState } from "react";
import { Link as Links } from "react-scroll";
import{MenuUnfoldOutlined} from '@ant-design/icons';
import { Popover } from 'antd';

import LogoSippp from "../../assets/images/landing/logo-sippp.svg";
import LogoUt from "../../assets/images/Logo ut.png";
// import { Button } from "antd";
// import { Link as LinkR } from "react-router-dom";


const NavbarLanding = (props) => {
   const isLogin = props.isLogin;
   const [changeBG, setChangeBG] = useState(false);
   React.useEffect(() => {
      const colorChange = () => {
         if (window.scrollY >= 80) {
            setChangeBG(true);
         } else {
            setChangeBG(false);
         }
      };
      window.addEventListener("scroll", colorChange);
   });
const text = <span>Menu</span>;
const content = (
  <div>
    <p>Beranda</p>
    <p>Tentang</p>
    <p>Fitur</p>
    <p>Kontak</p>

  </div>
);
   return (
      <>
      <nav className={ (changeBG ? " duration-700 fixed bg-white shadow-md" : " duration-700 fixed bg-transparent md:pt-14") + " w-full flex justify-between place-items-center md:px-24 py-3 z-10"}>
         <div className="logo text-black ">
            {/* <i className="fas fa-desktop"></i> */}
            <a className="text-2xl font-bold text-black" href="#">
               <img src={LogoUt} style={{ width: 200 }} />
            </a>
         </div>
         <div className="md:hidden   p-5 text-xl">
       <Popover placement="rightTop" title={text} content={content} trigger="hover">
      <button className="bg-white px-2 pb-2 rounded-md">
      <MenuUnfoldOutlined />
      </button>
      </Popover>
      </div>
         <div className="md:flex hidden">
            <Links to="home" spy={true} smooth={true} duration={900}>
               <p className={(changeBG ? "font-mulish text-base  text-black font-semibold" : "font-mulish text-base  text-white font-semibold") + " px-6 hover:text-blue-500 hover:outline-1 hover:border-2 hover:rounded-2xl hover:border-cyan-700 hover:bg-white focus:text-blue-500 focus:outline-1 focus:border-2 focus:rounded-2xl focus:border-cyan-700 focus:bg-white"}>Beranda</p>
            </Links>
            {
               isLogin ?
                  <Links to="aplikasi" spy={true} smooth={true} duration={900}>
                     <p className="font-mulish text-base  text-white font-semibold px-6 hover:text-blue-500 hover:outline-1 hover:border-2 hover:rounded-2xl hover:border-cyan-700 hover:bg-white focus:text-blue-500 focus:outline-1 focus:border-2 focus:rounded-2xl focus:border-cyan-700 focus:bg-white">Aplikasi</p>
                  </Links>
                  :
                  ''
            }
            <Links to="tentang" spy={true} smooth={true} duration={900}>
               <p className={(changeBG ? "font-mulish text-base  text-black font-semibold" : "font-mulish text-base  text-white font-semibold") + " px-6 hover:text-blue-500 hover:outline-1 hover:border-2 hover:rounded-2xl hover:border-cyan-700 hover:bg-white focus:text-blue-500 focus:outline-1 focus:border-2 focus:rounded-2xl focus:border-cyan-700 focus:bg-white"}>Tentang</p>
            </Links>
            <Links to="visi" spy={true} smooth={true} duration={500}>
               <p className={(changeBG ? "font-mulish text-base  text-black font-semibold" : "font-mulish text-base  text-white font-semibold") + " px-6 hover:text-blue-500 hover:outline-1 hover:border-2 hover:rounded-2xl hover:border-cyan-700 hover:bg-white focus:text-blue-500 focus:outline-1 focus:border-2 focus:rounded-2xl focus:border-cyan-700 focus:bg-white"}>Fitur</p>
            </Links>
            <Links to="tentang" spy={true} smooth={true} duration={900}>
               <p className={(changeBG ? "font-mulish text-base  text-black font-semibold" : "font-mulish text-base  text-white font-semibold") + " px-6 hover:text-blue-500 hover:outline-1 hover:border-2 hover:rounded-2xl hover:border-cyan-700 hover:bg-white focus:text-blue-500 focus:outline-1 focus:border-2 focus:rounded-2xl focus:border-cyan-700 focus:bg-white"}>Kontak</p>
            </Links>
            {/* <Links to="home" spy={true} smooth={true} duration={500}>
               <p className="font-mulish text-base focus:text-blue-500 text-black font-semibold px-6 hover:text-blue-500 ">Misi</p>
            </Links> */}
         </div>
      </nav>
      </>
   );
};

export default NavbarLanding;
