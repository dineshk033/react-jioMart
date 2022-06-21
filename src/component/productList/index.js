import { useState } from "react";
import ProductList from "./productList";

const URL =
  "https://www.jiomart.com/images/category/219/fruits-vegetables-20220519.jpeg";
const ProductContainer = ({ DATA }) => {
  const [sort, setSort] = useState("Popularity");
  const handleSorting = (arg) => {
    setSort(arg);
  };
  console.log(DATA);
  return (
    <div className="p-3">
      <img src={URL} alt="banner" />
      <div className="d-flex justify-content-end my-3 align-items-center">
        Sort By
        <button
          onClick={() => handleSorting("Popularity")}
          className="btn btn-outline-primary mx-2"
        >
          Popularity
        </button>
        <button
          onClick={() => handleSorting("HighToLow")}
          className="btn btn-outline-primary mx-2"
        >
          High to Low
        </button>
        <button
          onClick={() => handleSorting("LowToHigh")}
          className="btn btn-outline-primary mx-2"
        >
          Low to High
        </button>
      </div>
      <ProductList sort={sort} DATA={DATA} />
    </div>
  );
};

export default ProductContainer;
