import React, { useEffect, useState } from "react";
import FilterComponent from "../component/filters";
import ProductContainer from "../component/productList";
import baseAPISetup from "../shared/baseAPISetup";
import { PriceFilter } from "../utils/priceFilter";
/**Create context with default value.. export context to consume with same context, exporting outside the component */
export const DataContext = React.createContext([]);

const Homepage = () => {
  const [price, setPrice] = useState(10000);
  const [dataList, setDataList] = useState([]);
  const handlePrice = (arg) => {
    setPrice(arg);
  };

  /**fetch data from backend */
  useEffect(() => {
    baseAPISetup
      // .get("/groceriesList?avg_mrp_gte=10&avg_mrp_lte=100")
      .get("/groceriesList")
      .then((res) => setDataList(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      <div className="col-3 bg-light">
        <FilterComponent handlePrice={handlePrice} />
      </div>
      <div className="col-9 bg-light">
        {/* <FetchDataConsume /> */}
        {/**Provider needs to create with contextname.provider. whoever inside this provider can able to acces this context  */}
        <DataContext.Provider value={PriceFilter(dataList, price)}>
          <ProductContainer />
        </DataContext.Provider>
        {/* <ToggleButton /> */}
      </div>
    </div>
  );
};

export default Homepage;
