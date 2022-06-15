import { GroceriesMockData } from "../../MockData";
import ProductCard from "./productItem";

const ProductList = () => {
  const renderIteration = () => {
    return GroceriesMockData.map((item) => (
      <ProductCard key={item.product_code} {...item} />
    ));
  };

  return (
    <div className="p-3 bg-white mt-4">
      <div className="text-secondary font-weight-bold mb-3">All Products</div>
      <div className="row">{renderIteration()}</div>
      {/* <ProductCard {...GroceriesMockData[0]} /> */}
    </div>
  );
};

export default ProductList;
