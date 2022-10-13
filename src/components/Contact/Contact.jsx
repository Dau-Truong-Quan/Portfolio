import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = false;
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mess, setmess] = useState("");
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .send(
        "service_0kwqfiy",
        "template_f80rem2",
        {
          to_name: name,
          from_name: email,
          message: mess,
        },
        "-zfM0H1pk-vLIOBTL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setname("");
          setemail("");
          setmess("");
          // form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
          <textarea
            onChange={(e) => setmess(e.target.value)}
            name="message"
            value={mess}
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
