import React from 'react';
import '../Intro/Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instragram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
// import boy from '../../img/boy2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

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
                <img style={{ width: '420px', paddingRight: '235px', marginTop: '58px' }} src='https://upplabs.com/wp-content/uploads/2020/07/1.png' alt="" />
                <img src={glassesimoji} alt="" />

                <div style={{ top: '10rem', left: '58rem' }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'></FloatingDiv>
                </div>

                <div style={{ marginTop: '20rem', left: '34rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' text2='Award' />
                </div>
            </div>

            <div className='blur' style={{ background: 'rgb(236 210 255)' }}>

            </div>
            <div className='blur' style={{
                background: '#C1F5FF', top: '35rem',
                left: '26rem',
                with: '21rem',
                height: '11rem'
            }}
            ></div>
        </div>
    );
};

export default Intro;