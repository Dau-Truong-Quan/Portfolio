import React, { useContext } from "react";
import CardResume from "../Card/CardResume";
import { themeContext } from "../../Context";
import "./Resume.css";
const Resume = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="resume" id="resume">
      <div className="resume-title">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My </span>
        <span>Resume</span>
      </div>

      <div className="resume-body">
        <div className="r-left">
          <h3 class="resume-side-title-left">EXPERIENCE</h3>
          <CardResume
            title="CyberLogitec Việt Nam"
            timeline="June 2021 - December 2021"
            detail={[
              "Use Webix JavaScript UI library and framework",
              "Learn about Mybatis to build API, Oracle Database",
            ]}
          />
          <CardResume
            title="Personal Projects"
            timeline="July 2021 - Present"
            detail={[
              "Learning and practicing with many Front-end projects",
              "Working on my own projects with learned Front-end skills",
            ]}
          />
        </div>
        <div className="r-right">
          <h3 class="resume-side-title-right">EDUCATION</h3>
          <CardResume
            title="Posts and Telecommunications Institute of Technology"
            timeline="August 2018 - Present"
            detail={[
              "Information technology industry",
              "Majoring in software engineering",
            ]}
          />
          <CardResume
            title="Cybersoft - Cyberlearn Programing Education Center"
            timeline="January 2022 - July 2022"
            detail={[
              "Front-end Foundation course: HTML5, CSS3, Boostrap 4, SASS/SCSS, Javascript (ES5/ES6), Jquery, AJAX, Git, ...",
              "Java back-end course: RESTful API, CRM,  Spring Security, JWT , Spring Data JPA,  Spring IOC,  Spring Boot, ...",
            ]}
          />
        </div>
      </div>

      <div className="blur-resume"></div>
    </div>
  );
};

export default Resume;
