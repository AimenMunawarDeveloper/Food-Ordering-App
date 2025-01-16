import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Products from "../components/Products";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/list"
      );
      if (response.data.success) {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        console.log(response.data.products);
      } else {
        setError("Failed to fetch products. Please try again later.");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <Carousel />
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <>
          <Search
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <Products products={filteredProducts} />
        </>
      )}
      <Footer />
    </div>
  );
}
