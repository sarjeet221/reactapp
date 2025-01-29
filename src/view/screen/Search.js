import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import newdata from '../data/new.json'
import { useLocation } from "react-router-dom";
import ListingCard from "../component/listingcard/Listingcard";

export default function Search() {
    const incomingdata = useLocation()
    const keyword = incomingdata.state;
    // const keyword = "shirt";
    // console.log("searh check +++++++++++++++++", incomingdata.state)
    const searchresult = newdata.filter(product=> (product.name.toLowerCase()).includes(keyword.toLowerCase()))
  return (
    <Container>
      <div className="my-2">Search result for <strong> {keyword.toLowerCase()}</strong></div>

      <Row className="my-2">
        <Col className="mt-4">
          <Row>
            { searchresult.length > 0 ? (searchresult.map((d, key) => (
              <Col className="card-box" key={"product_" + key}>
                <ListingCard details={d}></ListingCard>
              </Col>
            ))):<>
            <div>No Product found</div>
            </>}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
