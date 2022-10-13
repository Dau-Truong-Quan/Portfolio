import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Portfolio.png";
import profilePic2 from "../../img/MinistoreAPI.png";
import profilePic3 from "../../img/Bookstore.png";
import CardProject from "../Card/CardProject";
import { themeContext } from "../../Context";
const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      title: "Portfolio",
      timeline: "October 2022 - Present",
      detail: [
        "Description: My portfolio where you can get my information and my done projects",
        "Responsibility :Development",
        "Technology : Swiper, Reactjs, Scroll, Reducer , Hook",
      ],
      linkGit: "",
      linkDemo: "",
    },
    {
      img: profilePic2,
      title: "Ministore",
      timeline: "January 2022 - August 2022",
      detail: [
        "Description: Buy stationery online on 3 platforms: Mobile, Desktop, Web",
        "Responsibility :Building a database,Contributing API,Main building in Web platform",
        "Technology :API: Spring Boot,Spring Security, JWT.,Web: Reactjs,Mobile: Java, Desktop: JavaSwing",
      ],
      linkGit: "https://github.com/trinhnhi1306/phattrienphanmemhuongdichvu",
      linkDemo: "https://api-ministore.herokuapp.com/swagger-ui.html#/",
    },
    {
      img: profilePic3,
      title: "Book store",
      timeline: "May 2021 - September 2021",
      detail: [
        "Description: Online book selling website",
        "Responsibility :Building a database,Build admin API,Contributing building admin website",
        "Technology :Front-end: HTML, Javascrip, Bootstrap, Css.,API: Spring Boot,Spring Security, JWT",
      ],
      linkGit: "",
      linkDemo: "https://github.com/huynhphuocsang/bookstore.git",
    },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />

                <div className="project-detail">
                  <CardProject
                    title={client.title}
                    timeline={client.timeline}
                    detail={client.detail}
                    linkDemo={client.linkDemo}
                    linkGit={client.linkGit}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
