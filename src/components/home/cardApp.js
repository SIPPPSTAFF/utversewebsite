import React, { useEffect, useState } from "react";
import "../../App.css";
import "antd/dist/antd.css";
import CardDinamis from "./cardDinamis";
import CardStatic from "./cardStatic";
import { LANDING_SIPPP, PATH } from "../../config/baseApi";
import AppTicket from "../common/ticket";
import { Modal } from "antd";

function AppCard(props) {
  const isLogin = props.isLogin;
  const [cardLanding, setCardLanding] = useState([]);

  // const fetchAplikasiAll = () => {
  //    fetch(LANDING_SIPPP + PATH.ALL_APLIKASI, {
  //       headers: {
  //          'Content-Type': 'application/json',
  //       }
  //    })
  //       .then((data) => data.json())
  //       .then((res) => {
  //          // Modal.warning({
  //          //    title: (
  //          //       <>
  //          //          <h1>Status: {res.status}</h1>
  //          //       </>
  //          //    ),
  //          //    content: (
  //          //       <>
  //          //          <h1>{res.message}</h1>
  //          //       </>
  //          //    )
  //          // })
  //          console.log("DATA APP: ", res)
  //          setCardLanding(res.data)
  //       });
  // }
  useEffect(() => {
    setCardLanding(JSON.parse(sessionStorage.getItem("aplikasi")));
    // fetchAplikasiAll()
  }, []);
  console.info(cardLanding);
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <section className="pb-20">
          <div className="container mx-auto px-4 bg-Menu">
            <div className="flex flex-wrap">
              <div className="grid mx-auto">
                <h2 className="text-3xl text-center">
                  Aplikasi SI<strong>PPP</strong>
                </h2>
                <p className="text-center">
                  Sistem Informasi Perencanaan, Pelaksanaan, dan
                  Pertanggungjawaban Keuangan
                  <br />
                  Universitas Terbuka
                </p>
              </div>
              <div className="grid lg:grid-cols-3 mx-auto px-4 gap-4 sm:grid sm:grid-cols-2">
                {cardLanding.map((card) => (
                  <>
                    <CardDinamis key={card.kode_aplikasi} appSippp={card} />
                  </>
                ))}
              </div>
            </div>
            <div className="py-16">
              <AppTicket />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AppCard;
