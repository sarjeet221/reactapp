import React, { useEffect, useState } from "react";
import { products, shop } from "../data/Data";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../component/newcom/Heading";
import ListingCard from "../component/listingcard/Listingcard";
import newdata from "../data/new.json";

function Shop() {
  return (
    <>
      <Container>
        <Heading>Our Products</Heading>
        <Row className="my-2">
          <Col className="mt-4">
            <Row>
              {newdata.map((d, key) => (
                <Col className="card-box" key={"product_"+key}>
                  <ListingCard details={d}></ListingCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
