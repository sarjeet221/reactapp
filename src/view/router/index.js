import React, { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Product from "../screen/product";
import Home from "../screen/Home";
import Login from "../screen/Login";
import Register from "../screen/Register";
// import { menu } from '../data/Data'
import "../style/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Detail from "../screen/Detail";
import Shop from "../screen/Shop";
import Logout from "../screen/Logout";
import cart from "../screen/Cart";
import Payment from "../screen/Payment";
import Checkout from "../screen/Checkout";
import search from "../screen/Search";
import { useSelector, useDispatch } from "react-redux";
import { clearMsg } from "../redux/Flashmsgslice";

export default function RouterNav() {
  const [userData, setuseData] = useState("");
  const [flshmsg, setflashmsg] = useState(false);
  const dispatch = useDispatch();

  const { msg , view } = useSelector((state) => state.flashmag);
  console.log("messssssssss", msg);
  useEffect(() => {
    setuseData(localStorage.getItem("user"));
  });
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMsg());
    }, 3000);
  }, [msg, view]);

  console.log(userData);

  return (
    <>
      {view && <div className="flash-msg mt-1"> {msg}</div>}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Home" Component={Home} />
        <Route path="/Product" Component={Product} />
        <Route path="/Login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/Detail" Component={Detail} />
        <Route path="/Shop" Component={Shop} />
        <Route path="/Logout" Component={Logout} />
        <Route path="/cart" Component={cart} />
        <Route path="/Payment" Component={Payment} />
        <Route path="/Checkout" Component={Checkout} />
        <Route path="/search" Component={search} />
      </Routes>
    </>
  );
}
