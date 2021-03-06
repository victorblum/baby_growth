import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
    render() { 
        return ( 
        <div className="about__content">
            <div className="about">
                <div className="about__description">
                    <p>ABOUT US</p>
                    <h4>
                    The first two years of a baby's evolve are the most important for the baby and the most exciting for the parents.
                    Baby Growth calendar is a convenient system that tells young parents how the baby is evolving between 0 and 24 months.
                    </h4>
                </div>
                <p className="about__help">WE CAN HELP YOU WITH</p>
                <div className="about__blocks">
                    <div className="about__first_block" style={{background: "#264653"}}>
                        <hr/>
                        <h2 className="about__block_title">Physical evolve</h2>
                    </div>
                    <div className="about__second_block" style={{background: "#2a9d8f"}}>
                        <hr/>
                        <h2 className="about__block_title">Social evolve and emotional environment</h2>
                    </div>                  
                    <div className="about__third_block" style={{background: "#e9c46a"}}>
                        <hr/>
                        <h2 className="about__block_title">Speech</h2>
                    </div>                        
                    <div className="about__forth_block" style={{background: "#f4a261"}}>
                        <hr/>
                        <h2 className="about__block_title">Cognitive sphere</h2>
                    </div>
                </div>
            </div>
        </div>)
    }
}