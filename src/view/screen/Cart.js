import React from "react";
import Heading from "../component/newcom/Heading";
import { useSelector } from "react-redux";
import ListingCard from "../component/listingcard/Listingcard";
import { Container, Col, Row } from "react-bootstrap";
import ProductCard from "../component/catr/Cartcard";

export default function Cart() {
  const cartdata = useSelector((state) => state.cart) || []; // Ensure valid state

  console.log("Cart Data:", cartdata);

  return (
    <Container>
      <Heading>Cart</Heading>

      {cartdata.length > 0 ? (
        <Row className="mt-5">
          {cartdata.map((d, key) => (
            <Col md={6} className="card-box" key={"product_" + key}>
              <ProductCard product={d} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
}
