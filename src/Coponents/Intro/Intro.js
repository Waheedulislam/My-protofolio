import React from "react";
import "../Intro/Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instragram from "../../img/instagram.png";
import my from "../../img/my (3).jpg";
import Resume from "./Wahidul Islam (4).pdf";

const Intro = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={my} class="max-w-96 max-h-96 rounded-lg shadow-2xl" />

          <div className="max-w-16">
            <div className="i-name">
              <span className="font-bold ">Hello s! I am </span>
              <span>Waheedul Islam</span>
              <span>
                Fronted Developer with high level and development, producting
                the Quality work
              </span>
            </div>
            <a href={Resume} download>
              <button className="button s-button">Download CV</button>
            </a>

            <div className="i-icon">
              <img src={Github} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Instragram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
