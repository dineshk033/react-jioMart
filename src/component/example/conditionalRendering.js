import { useState } from "react";
import LifeCycle from "./lifeCycle";

const ConditionalRender = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => {
    setIsLogged(!isLogged);
  };
  /**create element and apply simple if else condition */
  let button;
  if (isLogged) {
    button = (
      <button className="btn btn-sm btn-danger" onClick={handleClick}>
        Logout
      </button>
    );
  } else {
    button = (
      <button className="btn btn-sm btn-success" onClick={handleClick}>
        Login
      </button>
    );
  }
  /**ternary format */
  let btn1 = isLogged ? (
    <button className="btn btn-sm btn-danger" onClick={handleClick}>
      Logout
    </button>
  ) : (
    <button className="btn btn-sm btn-success" onClick={handleClick}>
      Login
    </button>
  );
  return (
    <div>
      <h6>Element Variables</h6>
      {button} {btn1}
      <h6>Inline-condition simple IF statement</h6>
      {isLogged && (
        <div>
          <h5>Currently user is logged</h5>
          <h6>Second statement</h6>
        </div>
      )}
      <h6>Inline-condition simple IF-ELSE statement</h6>
      {isLogged ? <LifeCycle /> : <h6>welcome Guest!</h6>}
    </div>
  );
};

export default ConditionalRender;
