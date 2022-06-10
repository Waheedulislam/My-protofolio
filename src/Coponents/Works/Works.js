import React from 'react';
import './Works.css'
import UpWork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'
import Shopify from '../../img/Shopify.png'

const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Works For All these</span>
                <span>
                    My Awesome Text
                </span>
                <span>
                    Services
                </span>
                <span>
                    Lorem ipsum dolor, sit amet consectetur
                    <br />
                    adipisicing elit. Error delectus architecto porro qui!
                    <br />
                    adipisicing elit. Error delectus architecto porro qui! architecto porro qui!
                    <br />
                    adipisicing elit.
                </span>
                <button className='button s-button'>Hire me</button>

                <div className='blur s-blur' style={{ background: '#ABFF1FF94' }}></div>


            </div>
            {/* right  */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={UpWork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* bg mainCircle */}
                <div className='w-backCircle w-blueCircle'>
                </div>
                <div className="w-backCircle w-yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;