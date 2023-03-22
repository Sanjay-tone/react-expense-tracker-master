import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="social-icon">
        <a href="https://www.instagram.com/single__tone______/">
          <div className="fa-instagram icons">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sanjay-vel-63b0271a2/">
          <div className="fa-linkedin icons">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/Sanjay-tone">
          <div className="fa-github icons">
            <FaGithub />
          </div>
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
