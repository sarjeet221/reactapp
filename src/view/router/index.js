import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Product from '../screen/product'
import Home from '../screen/Home'
import Login from '../screen/Login'
import Register from '../screen/Register'
// import { menu } from '../data/Data'
import "../style/style.css";
import { Container, Row, Col } from 'react-bootstrap'
import Detail from '../screen/Detail'
import Shop from '../screen/Shop'
import Logout from '../screen/Logout'
import AddToCart from '../screen/AddToCart'
import Payment from '../screen/Payment'
export default function RouterNav() {
  const [userData, setuseData] = useState('')
  useEffect(()=>{
    setuseData(localStorage.getItem('user'))
  })
  console.log(userData);
  return (
    <>
      <Routes>

        <Route path='/' Component={Home} />
        <Route path='/Home' Component={Home} />
        <Route path='/Product' Component={Product} />
        <Route path='/Login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/Detail' Component={Detail} />
        <Route path='/Shop' Component={Shop} />
        <Route path='/Logout' Component={Logout} />
        <Route path='/Addtocart' Component={AddToCart} />
        <Route path='/Payment' Component={Payment} />



      </Routes>
    </>

  )
}
