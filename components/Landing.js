import React from "react";
import Button from "./Button";
function Landing({ english }) {
  return (
    <div className="landing" id="landing">
      <div className="container">
        {english ? (
          <h1>
            Hi, my name is <span className="name">Donovan</span>
            <span className="second-line">Web Developer</span>
          </h1>
        ) : (
          <h1>
            Salut, Je suis <span className="name">Donovan</span>
            <span className="second-line">Web Developer</span>
          </h1>
        )}
        <a href="">
          <Button url={"#"} text={english ? "More Information" : "En savoir plus"} color={"white"} />
        </a>
      </div>
    </div>
  );
}

export default Landing;
