import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Wahidul Islam (4).pdf'

const Services = () => {
    return (
        <div className="Services" id='service'>

            {/* left-side */}
            <div className="awesome">
                <span>
                    My Awesome Text
                </span>
                <span>
                    Services
                </span>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error delectus architecto porro qui!
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>

                <div className='blur s-blur' style={{ background: '#ABFF1FF94' }}></div>
            </div>
            {/* right */}

            <div className='cards'>
                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji}
                        heading={'Design'}
                        Detail={'Figma, Sketch,PhotoShop'}
                    ></Card>
                </div>
            </div>

            {/* second  */}
            <div className='cards' style={{ top: '12rem', left: '-4rem' }}>
                <Card emoji={Glasses}
                    heading={'Developer'}
                    Detail={'Html,Css,JavaScript,React'}
                ></Card>
            </div>

            {/* 3rd */}
            <div className='cards' style={{ top: '19rem', left: '12rem' }}>
                <Card emoji={humble}
                    heading={'UI/UX'}
                    Detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                ></Card>
            </div>
        </div>
    );
};

export default Services;