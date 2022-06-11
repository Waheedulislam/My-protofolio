import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'


const Services = () => {
    return (
        <div className="Services ">

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


                <div className='blur s-blur' style={{ background: '#ABFF1FF94' }}></div>
            </div>
            {/* right */}

            <div className='cardss'>
                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji}
                        heading={'Design'}
                        Detail={'Figma, Sketch,PhotoShop'}
                    ></Card>
                </div>
            </div>

            {/* second  */}
            <div className='cardss' style={{ top: '12rem', left: '-4rem' }}>
                <Card emoji={Glasses}
                    heading={'Developer'}
                    Detail={'Html,Css,JavaScript,React'}
                ></Card>
            </div>

            {/* 3rd */}
            <div className='cardss' style={{ top: '19rem', left: '9rem' }}>
                <Card emoji={humble}
                    heading={'UI/UX'}
                    Detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                ></Card>
            </div>
        </div>
    );
};

export default Services;