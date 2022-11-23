import React, { useEffect, useState } from "react";
import Register from "./register";
import { useNavigate } from "react-router-dom";
import VideoBg from "../../assets/video/Utverse Trailer.mp4";
import LoginLogo from "../../assets/images/vec-login.svg";

import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Modal,
} from "antd";
import {
  MailOutlined,
  WindowsOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import AppCard from "./cardApp";
import Tentang from "./Tentang";

function AppHero() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
 

  const handleLogout = () => {
    Modal.info({
      title: "Akhiri Session?",
      content: (
        <div>
          <p>Anda yakin ingin mengakhiri session sekarang?</p>
        </div>
        
      ),
      onOk() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("aplikasi");
      },
    });
  };
  
  // useEffect(() => {
  //    localStorage.getItem('aplikasi') .then((app) => console.log(app)) .catch((err) => console.log(err))
  // }, [])
  return (
    <div className="inline-block ">
      <video src={VideoBg} autoPlay loop muted/>
      <div className="teks ">
        <hi class="font-semibold leading-tight text-xl md:text-5xl text-white -ml-10 -mt-96 md:-mt-0 inline-block md:p-2 ">
                  Rasakan Pengalaman Baru 
              <br />Dunia Virtual 3D dengan
        </hi>
        <div>
        <hi className="font-semibold md:text-5xl text-white bg-amber-500 border-0 rounded-2xl inline-block -ml-10  p-2 mt-2">
         UT Verse 
        </hi>

        </div>
        
        
      </div>
      <div className="space-around bg-header ">
        <div className="md:pt-60 md:ml-16 ml-36 mb-10 pt-20 ">
          <div className="Buttonlogin">
            <div class="md:mb-2 md:w-4/12 md:pt-5 mb-96">
              <div class="inline-flex items-center justify-center">
              <button
                      //onClick={handleLogout}
                     
                     onClick={() => {
                      window.open( "https://www.spatial.io/s/ut-verses-Virtual-World-637ca5496fb2f70001c39f47?share=2591360497769489630","_blank");
                   }}
                      class="bg-white  md:w-48 border border-indigo-700 text-indigo-700 hover:bg-indigo-500 hover:text-white text-center py-2 px-4 rounded-full "
                    >
                      Daftar
                    </button>
              <button
                      //onClick={handleLogout}
                      onClick={() => {
                        window.open( "https://www.spatial.io/s/ut-verses-Virtual-World-637ca5496fb2f70001c39f47?share=2591360497769489630","_blank");
                     }}
                      class="ml-3 bg-indigo-700 md:w-48 hover:bg-indigo-500 text-white text-center py-2 px-4 rounded-full"
                    >
                      Masuk
                    </button>
                    
                    
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* MODAL LOGIN */}
      <Modal
        width={1000}
        visible={loginVisible}
        footer=""
        closable
        onCancel={() => setLoginVisible(false)}
      >
        <div className="container flex">
          <div>
            {/* <LoginLogo className="h-96 mr-auto" /> */}
            <img src={LoginLogo} alt="Image Login" />
          </div>
          <div>
            <h1 className="font-bold text-3xl">Login</h1>
            <p className="font-thin">
              Satu Halaman Login Untuk Semua Modul Sistem Manajemen Informasi
              Universitas Terbuka.
            </p>
            <Form form={form} layout="vertical">
              <Form.Item label="Email">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  prefix={<MailOutlined />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <div className="flex justify-between">
                  <a
                    onClick={() => {
                      setRegisterVisible(true);
                      setLoginVisible(false);
                    }}
                    className="text-inherit"
                  >
                    Daftar Akun
                  </a>
                  <a className="text-inherit">Lupa Password ?</a>
                </div>
              </Form.Item>
              <Form.Item className="justify-items-center">
                <div className="container h-20">
                  <Checkbox>Ingat Saya</Checkbox>
                  <Button
                    // onClick={handleLogin}
                    className="mt-2 w-full"
                    type="primary"
                    style={{ background: "#044694", height: 50 }}
                  >
                    Masuk
                  </Button>
                  <Button
                    style={{ border: "white" }}
                    className="w-full"
                    icon={<WindowsOutlined className="text-2xl" />}
                  >
                    Masuk dengan Microsoft (SSO)
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>

      {/* MODAL REGISTER */}
      <Modal
        visible={registerVisible}
        width={1000}
        closable
        onCancel={() => setRegisterVisible(false)}
      >
        <Register />
      </Modal>

      {/* LOGIN ???????? */}
      {sessionStorage.getItem("token") ? (
        <section id="aplikasi">
          
          <AppCard />
        </section>
      ) : (
        <>
          <Tentang />
        </>
      )}
    </div>
  );
}
export default AppHero;
