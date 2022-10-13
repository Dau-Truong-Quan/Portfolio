import React from "react";
import "./CardProject.css";
const CardProject = ({ title, timeline, detail, linkDemo, linkGit }) => {
  console.log(detail);
  return (
    <div className="card-project">
      <span className="card-project-name">{title}</span>
      <span className="card-project-timeline">{timeline}</span>
      <ul>
        {detail.map((item, index) => {
          return (
            <li className="card-project-detail" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="button-list">
        <button className="button p-button-demo">Link demo</button>
        {linkDemo != "" ? (
          <a href={linkDemo} className="button p-button-demo">
            Link demo
          </a>
        ) : (
          ""
        )}
        <a href={linkGit} className=" p-button-github">
          Link github
        </a>
      </div>
    </div>
  );
};

export default CardProject;
