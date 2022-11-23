import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/images/vec-login.svg";
import { LANDING_SIPPP, PATH } from "../../config/baseApi";
import { Form, Checkbox, Modal } from "antd";
import Smile from "../../assets/images/gif/smile.gif";
// import { useDispatch } from "react-redux";
import { setUserStorage, getUserStorage } from "../../utills";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const data = {
    email: email,
    password: password,
  };

  const handleLogin = () => {
    fetch(LANDING_SIPPP + PATH.LOGIN_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.status === "success") {
          setEmail("");
          setPassword("");
          const store = {
            token: response.data.token,
            aplikasi: response.data.aplikasi,
            user: response.data.user,
          };
          setUserStorage(store);
          Modal.success({
            title: (
              <>
                <img src={Smile}></img>
                <h1>SELAMAT DATANG USER!</h1>
              </>
            ),
            content: (
              <div>
                <p>{response.message}</p>
              </div>
            ),
            onOk() {
              navigate("/");
            },
          });
          // setIsLogin(true);
          // setCard(response.data.aplikasi);
        } else {
          console.log("Response Login User: ", response);
          setEmail("");
          setPassword("");
          Modal.error({
            title: (
              <>
                <h1>
                  Error: {response.code} Status: {response.status}
                </h1>
              </>
            ),
            content: response.error[0].msg,
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          const { data } = error.response;
          alert(data.error);
        } else {
          Modal.error({
            title: "ERROR",
            content: "Internet atau API bermasalah!",
          });
          console.log(error);
          // setLoginVisible(false)
          setEmail("");
          setPassword("");
        }
      });
  };

  return (
    <div className="container">
      <div className="flex">
        <div className="duration-1000">
          <img className="h-full" src={LoginImage} alt="Login Image" />
        </div>

        <div>
          {/* FORM LOGIN */}
          <div className="mt-24">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="font-thin text-slate-400">
              Satu Halaman Login Untuk Semua Modul Sistem Manajemen Informasi
              Universitas Terbuka.
            </p>
            <div className="mt-10">
              <Form layout="vertical" autoComplete="off" onFinish={handleLogin}>
                <Form.Item
                  label="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  rules={[{ required: true, message: "Email Wajib di Isi!" }]}
                >
                  <input
                    className="py-2 px-3 h-10 w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  rules={[
                    { required: true, message: "Password Wajib di Isi!" },
                  ]}
                >
                  <input
                    pattern="{4,}"
                    className="py-2 px-3 h-10 w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="password"
                    title="Pastikan Untuk Mengisi Password Dengan Benar"
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                  <button className="text-white bg-blue-400 py-4 px-8 w-full rounded-full font-bold hover:bg-blue-600">
                    Login SIPPP Account
                  </button>
                </Form.Item>
              </Form>
              <div>
                <p className="text-slate-600 font-semibold">
                  Lupa Password ? <a href="#">Disini</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
