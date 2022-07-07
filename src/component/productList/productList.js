// import { GroceriesMockData } from "../../MockData";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { DataContext } from "../../pages/homepage";
import baseAPISetup from "../../shared/baseAPISetup";
import ProductCard from "./productItem";

const ProductList = ({ sort }) => {
  /**get the value from providers using contextname */
  const contextValue = useContext(DataContext);
  const themeValue = useContext(ThemeContext);
  const sortByMock = (arg) => {
    switch (arg) {
      case "HighToLow":
        return contextValue.sort((a, b) => b.avg_mrp - a.avg_mrp);
      case "LowToHigh":
        return contextValue.sort((a, b) => a.avg_mrp - b.avg_mrp);

      default:
        return contextValue.sort((a, b) => b.popularity - a.popularity);
    }
  };

  const handleAdd = (arg) => {
    baseAPISetup.get(`/cart?product_code=${arg.product_code}`).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        updateCart(res.data[0]);
      } else {
        createCart(arg);
      }
    });
  };

  /**handle post in seperate method */
  const createCart = (arg) => {
    const OBJ = {
      image_url: arg.image_url,
      display_name: arg.display_name,
      avg_mrp: arg.avg_mrp,
      product_code: arg.product_code,
      order_qty: 1,
    };
    baseAPISetup.post("/cart", OBJ).then((data) => console.log(data));
  };

  /**handle put in seperate method */
  const updateCart = (arg) => {
    /**adding 1 to cart for already present record */
    const obj = arg;
    obj.order_qty = arg.order_qty + 1;
    console.log(obj);
    baseAPISetup.put(`/cart/${arg.id}`, obj).then((data) => console.log(data));
  };

  const renderIteration = () => {
    const DATA = sortByMock(sort);
    return DATA.map((item) => (
      <ProductCard key={item.product_code} {...item} handleAdd={handleAdd} />
    ));
  };

  console.log(themeValue);
  return (
    <div className="p-3 bg-white mt-4">
      <div className="text-secondary font-weight-bold mb-3">All Products</div>
      <div className="row">{renderIteration()}</div>
      {/* <ProductCard {...GroceriesMockData[0]} /> */}
    </div>
  );
};

export default ProductList;
ProductList.defaultProps = {
  sort: "Popularity",
};
