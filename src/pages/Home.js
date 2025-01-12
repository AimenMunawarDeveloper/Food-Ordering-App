import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Products from "../components/Products";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/product/list");
    if (response.data.success) {
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
      console.log(response.data.products);
    } else {
      console.log("error fetching products");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Search
        products={products}
        setFilteredProducts={setFilteredProducts}
      ></Search>
      <Products products={filteredProducts}></Products>
      <Footer />
    </div>
  );
}
