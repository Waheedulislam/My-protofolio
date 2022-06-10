import React from 'react';
import './Experience.css'
const Experience = () => {
    return (
        <div className='experience'>
            <div className='achievement'>
                <div className='circle'>
                    1+
                </div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            {/* 2nd */}
            <div className='achievement'>
                <div className='circle'>
                    12+
                </div>
                <span>Complete</span>
                <span>Projects</span>
            </div>
            {/* 3rd */}
            <div className='achievement'>
                <div className='circle'>
                    4+
                </div>
                <span>Companies</span>
                <span>Work</span>
            </div>
        </div>
    );
};

export default Experience;