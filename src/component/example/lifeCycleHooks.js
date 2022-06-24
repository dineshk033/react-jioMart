import { useEffect, useState } from "react";

const EffectHooks = () => {
  const [price, setPrice] = useState(1000);
  const [count, setCount] = useState(0);
  /**called everytime whenever change in element */
  useEffect(() => {
    console.log("Called everytime change in DOM....");
  });
  /**Invoking only one time in UI while mounting */
  useEffect(() => {
    console.log("Mounted ELements in DOM....");
  }, []);

  /**Invoking only one time in UI based on count */
  useEffect(() => {
    console.log("track value of count.");
  }, [count]);

  /**unmount */
  useEffect(() => {
    console.log("track value of count.");
    return () => {
      /**unsubscribing content here */
    };
  }, [count]);
  return (
    <div>
      Functiona Componnent -- {price} --{count}
      <button
        className="btn btn-sm btn-primary mx-3"
        onClick={() => setPrice(price + 500)}
      >
        Click to add 500
      </button>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setCount(count + 1)}
      >
        add Count
      </button>
    </div>
  );
};

export default EffectHooks;
