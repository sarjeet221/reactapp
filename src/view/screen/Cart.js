import React, { useEffect, useState } from "react";
import Heading from "../component/newcom/Heading";
import { useSelector } from "react-redux";
import ListingCard from "../component/listingcard/Listingcard";
import { Container, Col, Row } from "react-bootstrap";
import ProductCard from "../component/catr/Cartcard";

export default function Cart() {
  const cartdata = useSelector((state) => state.cart) || []; // Ensure valid state
  console.log("Cart Data:", cartdata);

  const [grandtotal,setgrandtotal] = useState(0);
  const [deliverycharge,setdeliverychage] = useState();
  const [tex,settex] = useState(0);

useEffect(()=>{
  const cartSummary = cartdata.reduce(
    (acc, item) => {
      return {
        totalPrice: acc.totalPrice + item.price * item.quantity,
        };
    },
    { totalPrice: 0, totalTex: 0 }
  );
    setgrandtotal(cartSummary.totalPrice)
    settex(cartSummary.totalTex)
    console.log("this is overall",cartSummary.totalTax)
},[cartdata])
console.log("price array",grandtotal)

  return (
    <>
      <Heading>Cart</Heading>

      <div className="d-flex mt-5 cart-layout">
        <div className="col-lg-9">
          {cartdata.length > 0 ? (
            <Row className=" px-3">
              {cartdata.map((d, key) => (
                <Col className="card-box col-12 col-sm-6 col-md-12 col-lg-6" key={"product_" + key}>
                  <ProductCard product={d} />
                </Col>
              ))}
            </Row>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-md-4 col-lg-3 px-3 ps-md-1" >
          <div className="shadow p-4 rounded" style={{textAlign:"right",color:"#14213dff"}}>
            <ul className="p-0 m-0 mb-3 fw-medium">

              <li className="d-flex justify-content-between fs-5 fw-semibold mb-2">
                <span>Summry</span>
              </li>             
              <li className="d-flex justify-content-between mb-1">
                <span>Delivery Charges :</span> <strong>199</strong>
              </li>
              <li className="d-flex justify-content-between mb-1">
                <span>Grand Total :</span> <strong>{(grandtotal + 199).toFixed(2)}</strong>
              </li>
            </ul>
            <button className="border-0 rounded fw-semibold" style={{background:"#fca311ff", padding:"8px 16px"}} >Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
