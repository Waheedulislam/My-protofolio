import React from 'react';
import './Protoflio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sideber from '../../img/Web capture_10-6-2022_183318_tools-23b08.web.app.jpeg'
import ecommerce from '../../img/Web capture_10-6-2022_183948_gym-trainer-services.web.app.jpeg'
import hoc from '../../img/Web capture_10-6-2022_183513_melodic-kataifi-27b80e.netlify.app.jpeg'
import musicapp from '../../img/honda.jpeg'
import 'swiper/css'

const Protoflio = () => {
    return (
        <div className="portfolio">
            {/* headinng */}
            <span>My Latest Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sideber} alt="" >
                    </img>

                    <a href="https://tools-23b08.web.app/">
                        <button className='button s-button'>Click For Live</button>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />

                    <a href="https://gym-trainer-services.web.app/">
                        <button className='button s-button'>Click For Live</button>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                    <a href="https://inventory-house-a0164.web.app/">
                        <button className='button s-button'>Click For Live</button>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt="" />
                    <a href="https://melodic-kataifi-27b80e.netlify.app/">
                        <button className='button s-button'>Click For Live</button>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>


    );
};

export default Protoflio;