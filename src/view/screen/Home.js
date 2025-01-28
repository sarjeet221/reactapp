import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { products } from "../data/Data";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Image from 'react-bootstrap/Image';
import Heading from "../component/newcom/Heading";
import ListingCard from "../component/listingcard/Listingcard";
import ProductCard from "../component/catr/Cartcard";
import datanew from "../data/new.json";

function Home() {
  const bannerimg = [
    "Grey Brown Minimalist Summer season collections Banner Landscape.jpg",
    "Black and Neon Green Bold Sporty Outfit Banner.jpg",
    "Black White Bold Fashion Product Promotion Landscape Banner.jpg",
  ];

  const partnerlogoimg = [
    "Black and White Modern Clothing Store Logo.jpg",
    "1rt.jpg",
    "2.jpg",
  ];
  return (
    <>
      <Row style={{ maxWidth: "1920px", margin: "auto", width: "100%" }}>
        <Col style={{ padding: "0px" }}>
          <Carousel>
            {bannerimg.map((img, key) => {
              return (
                <Carousel.Item key={"banner_"+key}>
                  <Image src={require(`../image/${img}`)} width="100%" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
      <Container>
        <Row className="my-2">
          <Col>
            <Heading subheading="Shop Now">Popular products</Heading>
            <Row className="mt-4">
              {datanew.map((d, key) => (
                <Col className="card-box" key={"product"+key}>
                  <ListingCard details={d}></ListingCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src={require("../image/Brown Beige Simple Aesthetic Fashion Banner.jpg")}
              fluid
            />
          </Col>
        </Row>

        <Row className="mt-4">
          {partnerlogoimg.map((img, key) => {
            return (
              <Col xs={6} md={4} key={"client_"+key}>
                <Image src={require(`../image/${img}`)} rounded width="100%" />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
