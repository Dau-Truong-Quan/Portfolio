import React from "react";
import "./CardResume.css";
const CardResume = ({ title, timeline, detail }) => {
  console.log(detail);
  return (
    <div className="card-resume">
      <span className="card-resume-name">{title}</span>
      <span className="card-resume-timeline">{timeline}</span>
      <ul>
        {detail.map((item, index) => {
          return (
            <li className="card-resume-detail" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardResume;
