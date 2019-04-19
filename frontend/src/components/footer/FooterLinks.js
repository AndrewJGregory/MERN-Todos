import "./footer_links.css";

import {
  faAngellist,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FooterLinks() {
  return (
    <footer className="footer-container">
      <ul className="footer-container__links">
        <li>
          <a href="https://github.com/AndrewJGregory/">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrewjgregoryajg/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://angel.co/andrew-gregory-ajg">
            <FontAwesomeIcon icon={faAngellist} size="2x" />
          </a>
        </li>
      </ul>
      <div className="footer-text-container">
        <h3 className="footer-text">
          Made by <a href="http://andrewjgregoryajg.com">Andrew Gregory</a>
        </h3>
      </div>
    </footer>
  );
}
