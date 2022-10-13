import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/Quan.PNG";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/Spring_Framework_Logo.png";
import crown from "../../img/React-icon.svg.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Facebook from "../../img/Facebook-Icon.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Resume from "./DauTruongQuan.pdf";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <div style={{ height: "3rem" }}>
            <Typewriter
              options={{
                strings: [
                  ' <span style="color: var(--orange);font-weight: bold;font-size: 3rem;" >Hi! My name is Quan</span>',
                  ' <span style=" color: var(--orange);font-weight: bold;font-size: 3rem;" > I am a Software Developer</span>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <span>
            I'm passionate about learning new technologies and always keep
            concentrated on improving my self skills. Being patient and
            responsible for working help me implement completely assigned tasks.
          </span>
        </div>

        <a href={Resume} download>
          <button className="button ">Download CV</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Dau-Truong-Quan">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img
              style={{ height: "120px", color: "#F5C32C" }}
              src={Facebook}
              alt=""
            />
          </a>
          <a href="https://www.w3schools.com">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-25%" }}
          whileInView={{ left: "-15%" }}
          src={glassesimoji}
          alt=""
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 1,
          }}
        />
        <motion.img
          initial={{ top: "-4%", left: "74%", height: "100px" }}
          whileInView={{ left: "68%" }}
          src={crown}
          alt=""
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 1,
          }}
        />
        <motion.img
          initial={{ left: "5rem", top: "18rem", height: "80px" }}
          whileInView={{ left: "0rem" }}
          src={thumbup}
          alt=""
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 1,
          }}
        />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
