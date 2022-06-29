import { useEffect } from "react";
import CustomAPI from "../../shared/baseAPISetup";

const FetchDataConsume = () => {
  useEffect(() => {
    CustomAPI.get("/groceriesList", {
      params: { product_code: "590002136" },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h6>Api Consume </h6>
    </div>
  );
};
export default FetchDataConsume;
