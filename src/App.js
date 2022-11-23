import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "./views/home";
import Login from "./components/home/Login";
import store from "./store/store";
import { Provider, useSelector } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<AppHome />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
