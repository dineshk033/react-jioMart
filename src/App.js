import "./App.css";
import ToggleButton from "./component/example/eventSampe";
import ProductContainer from "./component/productList";
function App() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-3 bg-dark">
          <h3>filter here</h3>
        </div>
        <div className="col-9 bg-light">
          <ProductContainer />
          {/* <ToggleButton /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
