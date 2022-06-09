import React from 'react';
import '../Intro/Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instragram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I am </span>
                    <span>Waheedul Islam</span>
                    <span>Fronted Developer with high level and development, producting the Quality work</span>
                </div>
                <button className='button i-button'>Hire me</button>

                <div className="i-icon">
                    <a href=""></a>

                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instragram} alt="" />
                </div>
            </div>


            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
            </div>
        </div>
    );
};

export default Intro;