import React from "react";
import "./Spinner.css";
// url spinner https://tobiasahlin.com/spinkit/

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  );
};

export default Spinner;
