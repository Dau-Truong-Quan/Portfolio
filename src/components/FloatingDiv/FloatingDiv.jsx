import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img style={{ height: "3rem" }} src={img} alt="" />
      <span>{text1}</span>
    </div>
  );
};

export default FloatinDiv;
