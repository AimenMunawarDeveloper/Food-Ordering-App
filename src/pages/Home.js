import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
