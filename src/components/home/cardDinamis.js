import { Alert, Modal, Popover, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LANDING_SIPPP, PATH } from "../../config/baseApi";
import UserManagement from "../../assets/images/user_managent.png";
import emr from "../../assets/images/User_Management_SIPPP/emr.png";
import { Link, Navigate } from "react-router-dom";
import { setIframe } from "../../store/action/menuAction";
// import ComingSoon from '../../assets/images/comingsoon.png';

const CardDinamis = ({ appSippp }) => {
  const dispatch = useDispatch();
  const emailUser = JSON.parse(sessionStorage.getItem("user"));
  const [kodeApk, setKodeApk] = useState(null);
  const [kodeGroup, setKodeGroup] = useState([]);
  console.log(emailUser);
  console.log(emailUser);
  const URL = "https://dev-sippp.ut.ac.id:6999/public/uploads/";
  const URL_GREY =
    "http://localhost:3000/public/assets/images/User_Management_SIPPP/";
  const idUser = JSON.parse(sessionStorage.getItem("user"));
  const data = {
    id_user: idUser.id_user,
    kode_aplikasi: appSippp.kode_aplikasi,
  };
  console.info(JSON.parse(sessionStorage.getItem("aplikasi")));
  const getGroupMenu = () => {
    fetch(LANDING_SIPPP + PATH.MENU_BY_GROUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  };

  // const fetchGroup = () => {
  //   fetch(LANDING_SIPPP + PATH.GROUP_BY_APLIKASI, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((data) => data.json())
  //     .then((res) => {
  //       Modal.info({
  //         title: "Pilih Role Sebagai ...",
  //         content: (
  //           <Button onClick={getGroupMenu()}>{res.data[0].nama_grup}</Button>
  //         ),
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <>
      {appSippp.status === "0" || appSippp.url === "null" ? (
        <div className="p-4 text-center rounded-lg items-center relative flex-col min-w-0 break-words bg-white w-full mb-8 cursor-pointer transform hover:-translate-y-1 transition-all duration-700">
          <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
            <img
              className="h-25 w-25 mx-auto grayscale"
              src={URL + appSippp.image}
              alt={appSippp.nama_aplikasi}
            />
          </div>
          <div className="mx-auto">
            <p className="font-medium text-gray-900 text-2xl">
              {appSippp.nama_aplikasi}
            </p>
            <p className="text-sm text-gray-500">{appSippp.keterangan}</p>
            {/* <p className="text-sm text-gray-500">C O M I N G <br/> S O O N</p> */}
          </div>
        </div>
      ) : // <a onClick={() => fetchGroup()} >

      appSippp.kode_aplikasi === "20" ? (
        <Link to={appSippp.url} replace={true}>
          <div className="p-4 text-center rounded-lg items-center relative flex-col min-w-0 break-words bg-white w-full mb-8 cursor-pointer transform hover:-translate-y-1 transition-all duration-700">
            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
              <img
                className="h-25 w-25 mx-auto"
                src={URL + appSippp.image}
                alt={appSippp.nama_aplikasi}
              />
            </div>
            <div className="mx-auto">
              <p className="font-medium text-gray-900 text-2xl">
                {appSippp.nama_aplikasi}
              </p>
              <p className="text-sm text-gray-500">{appSippp.keterangan}</p>
            </div>
          </div>
        </Link>
      ) : (
        <a
          //   href={appSippp.url}
          onClick={() => {
            const data = {
              id_user: emailUser.id_user,
              kode_aplikasi: appSippp.kode_aplikasi,
            };

            fetch("https://dev-sippp.ut.ac.id:6999/sippp/group", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.data.length === 1) {
                  window.open(
                    `http://localhost:3010/?id_user=${emailUser.id_user}&kode_group=${data?.data[0]?.kode_group}`
                  );
                } else {
                  setKodeApk(appSippp.kode_aplikasi);
                  setKodeGroup(data.data);
                }

                // const kode_group = data.data[0].kode_group;
                // window.location.assign(
                //   "http://localhost:3000/e-budgeting/" +
                //     emailUser.id_user +
                //     "/" +
                //     kode_group
                // );
                // console.log(data);
                // const getgroup = {
                //   id_user: emailUser.id_user,
                //   kode_group: kode_group,
                // };
                // fetch("http://172.16.100.69:6999/sippp/menu", {
                //   method: "POST",
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify(getgroup),
                // })
                //   .then((res) => res.json())
                //   .then((b) => {
                //     console.log("a", b);
                //     const menu = [b.data.menu];
                //     // window.location.assign(
                //     //   "http://localhost:3000/e-budgeting/" + emailUser.nip
                //     // );
                //   });
              });
          }}
        >
          <div className="p-4 text-center rounded-lg items-center relative flex-col min-w-0 break-words bg-white w-full mb-8 cursor-pointer transform hover:-translate-y-1 transition-all duration-700">
            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
              <Popover
                title="Pilih Role Anda"
                visible={appSippp.kode_aplikasi === kodeApk ? true : false}
                content={
                  <div>
                    {kodeGroup?.map((res, index) => {
                      return (
                        <Button
                          style={{
                            marginRight: 10,
                            borderRadius: 5,
                          }}
                          onClick={() => {
                            const u = {
                              emailUser: emailUser.id,
                              token: 1,
                            };

                            window.open(
                              `http://localhost:3010/?id_user=${emailUser.id_user}&kode_group=${res?.kode_group}`
                            );
                          }}
                        >
                          {res.nama_group}
                        </Button>
                      );
                    })}
                  </div>
                }
              />
              <img
                className="h-25 w-25 mx-auto"
                src={URL + appSippp.image}
                alt={appSippp.nama_aplikasi}
              />
            </div>

            <div className="mx-auto">
              <p className="font-medium text-gray-900 text-2xl">
                {appSippp.nama_aplikasi}
              </p>
              <p className="text-sm text-gray-500">{appSippp.keterangan}</p>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default CardDinamis;