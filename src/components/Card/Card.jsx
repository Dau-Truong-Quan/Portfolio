import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img style={{ height: "6rem" }} src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
