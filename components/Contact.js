import React from "react";
import Button from "./Button";
// import { Link } from "react-router-dom";

function Contact({ english }) {
  return (
    <div className="contact">
      <div className="container">
        <h2>CONTACT</h2>
        <p>
          {english ? "Willing to collaborate ? " : "Envie de collaborer ? "}
          <span className="perfect">{english ? "Perfect !" : "Parfait !"}</span>
        </p>
        <a href="">
          <Button text={english ? "Let's talk" : "Parlons-en"} color={"primary"} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
