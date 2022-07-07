import { useEffect, useState } from "react";
import baseAPISetup from "../../shared/baseAPISetup";

const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    baseAPISetup.get("/cart").then((res) => setData(res.data));
  }, []);

  const handleDelete = (id) => {
    baseAPISetup.delete(`cart/${id}`).then((res) => {
      baseAPISetup.get("/cart").then((res) => setData(res.data));
      alert("Data has been successfully delete");
    });
  };

  const renderItem = () => {
    return data.map((item) => {
      const IMAGE = "https://www.jiomart.com/" + item.image_url;
      return (
        <div className="d-flex mb-3">
          <img src={IMAGE} className="mr-1" alt={IMAGE} width="100px" />
          <div>
            <h6>{item.display_name}</h6>
            <div className="mt-1 d-flex align-items-center">
              <h5 className=" text-success mr-3">Rs.{item.avg_mrp}</h5>
              <h6 className="text-secondary">QTY: {item.order_qty}</h6>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="btn btn-danger btn-sm float-right"
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h6>Cart Item</h6>
      <ul class="list-group">{renderItem()}</ul>
    </div>
  );
};
export default Cart;
