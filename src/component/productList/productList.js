// import { GroceriesMockData } from "../../MockData";
import ProductCard from "./productItem";

const ProductList = ({ sort, DATA }) => {
  const sortByMock = (arg) => {
    switch (arg) {
      case "HighToLow":
        return DATA.sort((a, b) => b.avg_mrp - a.avg_mrp);
      case "LowToHigh":
        return DATA.sort((a, b) => a.avg_mrp - b.avg_mrp);

      default:
        return DATA.sort((a, b) => b.popularity - a.popularity);
    }
  };

  const renderIteration = () => {
    const DATA = sortByMock(sort);
    return DATA.map((item) => (
      <ProductCard key={item.product_code} {...item} />
    ));
  };
  console.log(sort);
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
