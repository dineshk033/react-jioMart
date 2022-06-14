import ProductList from "./productList";

const URL =
  "https://www.jiomart.com/images/category/219/fruits-vegetables-20220519.jpeg";
const ProductContainer = () => {
  return (
    <div className="p-3">
      <img src={URL} alt="banner" />
      <ProductList />
    </div>
  );
};

export default ProductContainer;
