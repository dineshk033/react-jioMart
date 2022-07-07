import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseAPISetup from "../shared/baseAPISetup";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    baseAPISetup
      .get(`/groceriesList`, { params: { product_code: id } })
      .then((res) => setData(res.data));
  }, [id]);
  console.log(data);
  return (
    <div>
      {data.length > 0 && (
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <h5>{data[0].display_name}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
