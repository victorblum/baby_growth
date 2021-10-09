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
                    We will help you find out what skills a baby evolves between 0 and 24 months.
                    We will help you find out what skills a baby evolves between 0 and 24 months.
                    We will help you find out what skills a baby evolves between 0 and 24 months.
                    </h4>
                </div>
                <p className="about__help">WE CAN HELP YOU WITH</p>
                <div className="about__blocks">
                    <div className="about__first_block" style={{background: "#22356F"}}>
                        <h2 className="about__block_title">Physical evolve</h2>
                    </div>
                    <div className="about__second_block" style={{background: "#0052C1"}}>
                        <h2 className="about__block_title">Social evolve and emotional environment</h2>
                    </div>                  
                    <div className="about__third_block" style={{background: "#62D0DF"}}>
                        <h2 className="about__block_title">Speech</h2>
                    </div>                        
                    <div className="about__forth_block" style={{background: "#DEE1FF"}}>
                        <h2 className="about__block_title">Cognitive sphere</h2>
                    </div>
                </div>
            </div>
        </div>)
    }
}