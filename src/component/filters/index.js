import { useState } from "react";

const FilterComponent = ({ handlePrice }) => {
  //   const [price, setPrice] = useState(1000);
  //   const handleRange = (event) => {
  //     const VALUE = event.target.value;
  //     setPrice(VALUE);
  //   };

  //   console.log(price);
  return (
    <div className="p-3">
      <h3>Filter</h3>
      <label for="customRange1">Price range</label>
      <input
        type="range"
        min="10"
        step="1"
        max="150"
        onChange={(e) => handlePrice(e.target.value)}
        class="custom-range"
        id="customRange1"
      ></input>
    </div>
  );
};

export default FilterComponent;
