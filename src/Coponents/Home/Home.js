import React from 'react';
import Intro from '../Intro/Intro';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Protoflio from '../Protoflio/Protoflio';
import Services from '../Services/Services';
import Works from '../Works/Works';
const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Experience></Experience>
            <Protoflio></Protoflio>
            <Works></Works>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;