import { Link } from "react-router-dom";
import CustomButton from "../../shared/components/customButton";
const URL =
  "https://www.jiomart.com/images/product/150x150/590003564/tender-coconut-cling-wrapped-1-pc-approx-900-g-1300-g-product-images-o590003564-p590003564-0-202203151146.jpg";

const twoLines = { width: "100%", height: "50px", overflow: "hidden" };

const ProductCard = (props) => {
  const { image_url, display_name, avg_mrp, handleAdd, product_code } = props;
  const IMAGE = "https://www.jiomart.com/" + image_url;
  // console.log(prosps);
  return (
    <div className=" col-sm-1 col-md-4 col-lg-3 mb-4">
      <div class="card  p-2" style={{ width: "100%" }}>
        <img src={IMAGE} class="card-img-top" alt="..." height="165px" />
        <div className="card-body">
          <Link
            class="card-title mb-1 text-dark"
            style={twoLines}
            to={`/groceries/${product_code}`}
          >
            {display_name}
          </Link>
          {/* <h5>{display_name}</h5> */}
          <div className="mb-4">
            M.R.P: <span className="font-weight-bold">₹{avg_mrp}</span>
          </div>
          <CustomButton handleClick={() => handleAdd(props)} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.defaultProps = {
  image_url: "",
  display_name: "Default",
  avg_mrp: "00.00",
};
