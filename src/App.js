import "./App.css";
import ProductContainer from "./component/productList";
function App() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-4 bg-dark">
          <h3>filter here</h3>
        </div>
        <div className="col-8 bg-light">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
