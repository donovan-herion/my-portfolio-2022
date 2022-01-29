import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <a href="">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
        <div className="links">
          <FontAwesomeIcon icon={faLinkedin} className="link" onClick={() => window.open("https://www.linkedin.com/in/donovan-h%C3%A9rion/", "_blank")} />
          <FontAwesomeIcon icon={faGithub} className="link" onClick={() => window.open("https://github.com/donovan-herion", "_blank")} />
          <FontAwesomeIcon icon={faDiscord} className="link" onClick={() => window.open("https://discordapp.com/users/donovan#9964", "_blank")} />
        </div>
        <hr />
        <p>{`${new Date().getFullYear()} All rights reserved`}</p>
      </div>
    </footer>
  );
}

export default Footer;
