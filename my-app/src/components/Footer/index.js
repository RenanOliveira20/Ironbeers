import React from "react";

import ironhack from "../../images/ironhack-logo.jpeg";
import github from "../../images/github-logo.jpeg";

function Footer() {
  return (
    <footer
      className="navbar navbar-static-bottom navbar-light position-fixed fixed-bottom w-100"
      style={{ backgroundColor: "black" }}
    >
      <div className="d-flex flex-column align-content-start p-1">
        <h4 style={{ color: "#fff" }}>Developers:</h4>
        <div className="d-flex align-items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
            href="https://github.com/jhonatanveras"
          >
            <img
              src={github}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo img"
            />
          </a>
          <h6 style={{ color: "yellow" }}>Jhonatan Veras</h6>
        </div>

        <div className="d-flex align-items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
            href="https://github.com/RenanOliveira20"
          >
            <img
              src={github}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo Github"
            />
          </a>
          <h6 style={{ color: "yellow", paddingRight: "15px" }}>
            Renan Oliveira
          </h6>
        </div>
      </div>

      <div className="d-flex flex-column align-content-end">
        <div className="d-flex flex-column">
          <h6 style={{ color: "#fff" }} className="text-center container">
            Created as a FrontEnd project at Ironhack's Bootcamp campus São
            Paulo.
          </h6>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-brand d-flex justify-content-center"
          href="https://www.ironhack.com/br/sao-paulo"
        >
          <img
            src={ironhack}
            width="85"
            height="85"
            className="d-inline-block align-top"
            alt="logo Ironhack"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
