import React, { useState } from "react";
import { Menu, Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;
function AppHeader() {
   const [visible, setVisible] = useState(false);

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };
   return (
      <div className="container-fluid ">
         <div className="header">
            <div className="logo">
               {/* <i className="fas fa-desktop"></i> */}
               <a href="http://google.com">
                  SI<strong>PPP</strong>
               </a>
            </div>
            <nav className="flex sm:justify-center space-x-4  Bg-white">
               {[
                  ["Beranda", "/home"],
                  ["Aplikasi", "/team"],
                  ["Tentang", "/projects"],
                  ["Fitur", "/fitur"],
                  ["Kontak", "/kontak"],
                  ["Login", "/login"],
               ].map(([title, url]) => (
                  <a href={url} className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900">
                     {title}
                  </a>
               ))}
            </nav>
            {/* <div className="mobileHidden">
              <Anchor targetOffset="65">
                <Link href="/home" title="Home" />
                {/* <Link href="#about" title="About" /> 
                <Link href="/Login" title="Login" />
              </Anchor>
            </div> */}
         </div>
      </div>
   );
}

export default AppHeader;
