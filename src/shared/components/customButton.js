const CustomButton = ({ handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ fontSize: "0.9rem" }}
      className="btn btn-primary btn-lg btn-block "
    >
      <div className="d-flex justify-content-between">
        <div>Add to Cart</div>
        <div className="font-weight-bold">+</div>
      </div>
    </button>
  );
};

export default CustomButton;
