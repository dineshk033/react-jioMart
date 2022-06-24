import { useState } from "react";
import "./App.css";
import ConditionalRender from "./component/example/conditionalRendering";
import ToggleButton from "./component/example/eventSampe";
import EffectHooks from "./component/example/lifeCycleHooks";
import FilterComponent from "./component/filters";
import ProductContainer from "./component/productList";
import { PriceFilter } from "./utils/priceFilter";
function App() {
  const [price, setPrice] = useState(10000);
  const handlePrice = (arg) => {
    setPrice(arg);
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-3 bg-light">
          <FilterComponent handlePrice={handlePrice} />
        </div>
        <div className="col-9 bg-light">
          <EffectHooks />
          <ProductContainer DATA={PriceFilter(price)} />
          {/* <ToggleButton /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
