import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { bestseller, shop, products } from "../data/Data";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { addtocart } from "../data/Data";
import { useNavigate } from "react-router-dom";
import Heading from "../component/newcom/Heading";
import newdata from "../data/new.json";
import ListingCard from "../component/listingcard/Listingcard";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart  } from "../redux/Cartslice";
import {setMsg} from '../redux/Flashmsgslice'

function Detail() {
  const nav = useNavigate();
  const [img, setImg] = useState("");
  const loc = useLocation();
  const [productDetails, setproductDetails] = useState(loc.state);
  const [options, setOptions] = useState({ color: null, size: null });
 const dispatch = useDispatch();

  function ImageChange(img) {
    setImg(img);
  }

  function OnBuy() {
    if (options.color != null && options.size != null) {
      console.log("buttion clil");
      addtocart.push(productDetails);
      nav("/Checkout", { state: { productDetails, options } });
    }
  }
  const discount =
    ((productDetails.oldPrice - productDetails.price) /
      productDetails.oldPrice) *
    100;

  const handleColorSelection = (color) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      color: color,
    }));
  };

  const handalsizeselection = (size) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      size: size,
    }));
  };
  return (
    <>
      <Container>
        <Row xs={1} md={2} className="mt-4">
          <Col md={6} xs={12}>
            <Row sm={2}>
              <Col xs={2} sm={2} className="">
                {productDetails &&
                  productDetails?.images.map((img) => (
                    <Image
                      src={require(`../image/${img}`)}
                      onClick={() => ImageChange(img)}
                      width="100%"
                      style={{ cursor: "pointer", marginBottom: "5px" }}
                    />
                  ))}
              </Col>

              <Col xs={10} sm={10}>
                <div
                  className=""
                  style={{ maxHeight: "340px", height: "100%" }}
                >
                  <Image
                    src={require(`../image/${
                      img ? img : productDetails?.thumbimg
                    }`)}
                    className="rounded"
                    style={{ height: "100%", width: "auto" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={0}>
            <Row>
              <Col>
                <h5 className="my-2">{productDetails.name}</h5>
                <p className="m-0">{productDetails.description}</p>
                <strong className="my-2">
                  $ {productDetails.price} /-
                </strong>{" "}
                <span
                  className="text-decoration-line-through"
                  style={{ fontSize: "10px", color: "red" }}
                >
                  {productDetails.oldPrice}
                </span>{" "}
                &nbsp;
                <span>{discount.toFixed(0)}% off</span>
                <div className="rating" style={{ color: "yellowgreen" }}>
                  {"★".repeat(Math.round(productDetails.rating))}{" "}
                  <span className="review" style={{ fontSize: "12px" }}>
                    {productDetails.reviews}
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className="my-2">
                  <Col className="d-flex">
                    <p className="m-0" style={{ width: "75px" }}>
                      Color :{" "}
                    </p>{" "}
                    &nbsp;
                    {productDetails &&
                      productDetails?.color.map((c) => (
                        <div                         
                          key={"color_" + c}
                          className="me-2"
                        >
                          <button
                            onClick={() => {
                              handleColorSelection(c);
                            }}
                            style={{
                              backgroundColor: `${c}`,
                              height: "30px",
                              width: "30px",
                              margin: "5px",
                              borderRadius: "5px",
                            }}
                          ></button>
                          <p style={{ textAlign: "center", margin: "0px",backgroundColor:options.color == c ? "#e5e5e5" : "" }}  className={`${
                            options.color == c ? "active" : ""}`}>
                            {c}
                          </p>
                        </div>
                      ))}
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex">
                    <p className="m-0" style={{ width: "75px" }}>
                      Size :{" "}
                    </p>{" "}
                    &nbsp;
                    {productDetails &&
                      productDetails?.size.map((d) => (
                        <Button
                          onClick={() => {
                            handalsizeselection(d);
                          }}
                          className={`me-2 ${
                            options.size == d ? "active" : ""
                          }`}
                          variant="outline-success"
                          key={"size_" + d}
                        >
                          {d}
                        </Button>
                      ))}
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Size chart</Accordion.Header>
                        <Accordion.Body>
                          <table>
                            <thead>
                              <tr>
                                <th>Size</th>
                                <th>US</th>
                                <th>UK</th>
                                <th>EU</th>
                                <th>AU</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Small</td>
                                <td>4</td>
                                <td>8</td>
                                <td>36</td>
                                <td>8</td>
                              </tr>
                              <tr>
                                <td>Medium</td>
                                <td>6</td>
                                <td>10</td>
                                <td>38</td>
                                <td>10</td>
                              </tr>
                              <tr>
                                <td>Large</td>
                                <td>8</td>
                                <td>12</td>
                                <td>40</td>
                                <td>12</td>
                              </tr>
                              <tr>
                                <td>Extra Large</td>
                                <td>10</td>
                                <td>14</td>
                                <td>42</td>
                                <td>14</td>
                              </tr>
                            </tbody>
                          </table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
                <div className="my-2 d-flex gap-2">
                  <Button className="my-1 col-6" variant="success" onClick={()=>{dispatch(addToCart(productDetails));dispatch(setMsg("Added to cart!"))}}>
                    ADD TO CART
                  </Button>
                  <Button
                    className="my-1 col-6"
                    variant="success"
                    onClick={() => OnBuy()}
                  >
                    BUY NOW
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-2">
          <div className="mb-5">
            {" "}
            <Heading>Best seller</Heading>
          </div>
          {newdata.map((value, index) => (
            <Col className="card-box" key={"product_" + index}>
              <ListingCard details={value}></ListingCard>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col>
            <Image
              src={require("../image/Black and Neon Green Bold Sporty Outfit Banner.jpg")}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
