import { useState } from "react";

function Search({ products, setFilteredProducts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };
  return (
    <form
      className="d-flex flex-column align-items-center justify-content-center m-4"
      onSubmit={handleSearchFormSubmit}
    >
      <input
        className="form-control mb-3"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="btn btn-outline-success text-white bg-success"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
export default Search;
