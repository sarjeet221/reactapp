import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
import Heading from "../component/newcom/Heading";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Checkout() {
  const loc = useLocation();

  const nav = useNavigate();
  const [productDetails, setProductdetails] = useState(
    loc.state.productDetails
  );
  const [qty, setQty] = useState(1);
  const [rate, setRate] = useState("");
  const [totalrate, setTotyalrate] = useState(productDetails.price);
  const [optons, setoptions] = useState(loc.state.options);

  console.log(loc.state);

  useEffect(() => {
    setProductdetails(loc.state.productDetails);
    setTotyalrate(qty * productDetails.price);
  }, []);
  useEffect(() => {
    setTotyalrate(qty * productDetails.price);
  }, [qty]);

  console.log(productDetails);
  function QtyAdd() {
    setQty(qty + 1);
  }

  function QtySub() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  // function Totalrate() {
  //     setTotyalrate(qty * rate)
  // }

  function PaymentGet() {
    if (localStorage.getItem("user") !== null) {
      nav("/Payment");
    } else {
      nav("/Login");
    }
  }

  const discount =
    ((productDetails.oldPrice - productDetails.price) /
      productDetails.oldPrice) *
    100;

  const gstrate = productDetails.price > 1000 ? 12 : 5;

  const gstAmount = (productDetails.price * gstrate) / 100;

  return (
    <>
      <Container>
        <Heading>Order summry</Heading>

        <Row className="mt-5 gap-4">
          <Col
            lg={8}
            sm={12}
            style={{ backgroundColor: "#fbfbfbcc" }}
            className="me-5 py-2 rounded"
          >
            <Row xs={2}>
              <Col sm={4} xs={4}>
                <Image
                  src={require(`../image/${productDetails.thumbimg}`)}
                  width="100%"
                  className="rounded"
                />
              </Col>
              <Col sm={4} xs={8}>
                <Row>
                  <h4>{productDetails.name}</h4>
                  <div>
                    <span style={{ fontSize: "12px" }}>
                      MRP. <s>{productDetails.oldPrice}</s>
                    </span>{" "}
                    &nbsp;
                    <strong>₹ {productDetails.price}</strong> &nbsp;
                    <div
                      style={{
                        backgroundColor: "red",
                        borderRadius: "5px",
                        width: "fit-content",
                        color: "white",
                      }}
                    >
                      &nbsp; {discount.toFixed(0)}% off &nbsp;
                    </div>
                  </div>

                  <div className="qty-counter my-2" style={{width:"100px"}}>
                    <div onClick={QtySub}>
                      <FaMinus />
                    </div>
                    <sapn>{qty}</sapn>
                    <div onClick={QtyAdd}>
                      <FaPlus />
                    </div>
                  </div>
                  <strong className="align-content-center fs-5">
                    ₹ {totalrate.toFixed(2)}
                  </strong>

                  <h6>
                    Color:<strong>{optons.color}</strong>{" "}
                  </h6>
                  <h6>
                    Size:<strong>{optons.size}</strong>{" "}
                  </h6>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            lg={3}
            sm
            style={{
              textAlign: "right",
              backgroundColor: "#fbfbfbcc",
              float: "right",
              borderRadius: "5px",
            }}
          >
            <p>
              Shipping Charges :
              <strong className="chargesp">{0} &nbsp; /-</strong>
            </p>
            <p>
              GST :
              <strong className="chargesp">
                {(gstAmount * qty).toFixed(2)} &nbsp; /-
              </strong>
            </p>
            <p>
              Discount :<strong className="chargesp">{0} &nbsp; /-</strong>
            </p>
            <p>
              SubTotal Rs :
              <strong className="chargesp">
                {" "}
                {((productDetails.price + gstAmount) * qty).toFixed(2)} &nbsp;
                /-
              </strong>
            </p>
            <Button className="my-1" variant="success" onClick={PaymentGet}>
              Payment
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
