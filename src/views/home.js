import React, { useEffect, useState } from "react";
import "../App.css";
import{MenuUnfoldOutlined} from '@ant-design/icons';
import "antd/dist/antd.css";
import AppFooter from "../components/common/footer";
// import AppHeader from "../components/common/Header";
import Logout from "../assets/images/landing/logo_ut.png";
import AppHero from "../components/home/hero";

import NavbarLanding from "../components/common/Headerfix";
import AppTicket from "../components/common/ticket";
import News from "../components/home/News";
import { useSelector } from "react-redux";

function AppHome() {
  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //    return localStorage.getItem('token').then((value) => console.log(value)).catch((err) => console.log("Error", err))
  // }, [])
  return (
    <div >
      <NavbarLanding isLogin={isLogin} />
      
      {/* <div className="md:hidden">
      <button>
      <MenuUnfoldOutlined />

      </button>
         
      </div> */}

      <div id="home">
        <AppHero isLogin={isLogin} />
      </div>

      {/* <div id="aplikasi">
            <AppCard isLogin={isLogin} />
         </div> */}

      {/* VISI UT */}
      {/* <section>
            <div id="visi">
               <div className="container mt-32">
                  <div className="row flex mt-10">
                     <div className="col-6">
                        <img src={Logout} className="w-3/5 mx-auto" />
                     </div>
                     <div className="col-6 my-auto">
                        <h1 className="text-3xl font-bold">Visi</h1>
                        <h1 className="my-auto text-xl">Menjadi perguruan tinggi terbuka dan jarak jauh (PTTJJ) berkualitas dunia</h1>
                        <h1 className="text-3xl font-bold mt-3">Misi</h1>
                        <div className="">
                           <h1 className="my-auto text-xl"><strong>1.</strong> menyediakan akses pendidikan tinggi yang berkualitas dunia bagi semua lapisan masyarakat melalui penyelenggaraan berbagai program PTTJJ untuk menghasilkan lulusan yang berdaya saing tinggi.</h1>
                           <h1 className="my-auto text-xl"><strong>2.</strong> mengkaji dan mengembangkan sistem PTTJJ untuk mendukung implementasi sistem pembelajaran jarak jauh di Indonesia, dan</h1>
                           <h1 className="my-auto text-xl"><strong>3.</strong> memanfaatkan dan mendiseminasikan hasil kajian keilmuan, kelembagaan, dan PTJJ untuk menjawab tantangan kebutuhan pembangunan nasional.</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
      {/* <div className="container-fluid">
            <AppTicket />
         </div> */}
      {localStorage.getItem("token") ? (
        <></>
      ) : (
        <div id="news" className="mt-32">
          <News />
        </div>
      )}
      <div id="tentang">
        <AppFooter />
      </div>
    </div>
  );
}
export default AppHome;
