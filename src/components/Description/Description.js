import React, { Component } from 'react';
import './Description.css';
import children from './children.png'
import { Link } from 'react-router-dom';

export default class Description extends Component {
    render() { 
        return (
            <div className="description__content">
                <div className="description">
                    <p className="description__name">Baby Growth</p>
                    <h2 className="description__title">
                        HELPING YOU FIND OUT HOW YOUR CHILD IS EVOLVE
                    </h2>
                    <p className="description__main">Our baby development calendar will help you stop worrying about your baby's on-time evolving</p>
                    <div>
                        <Link to="/filters"><button type="button" className="button__filters">FILTERS</button></Link>
                        <Link to="/personal"><button type="button" className="button__personal">PERSONAL PAGE</button></Link>
                    </div>
                </div>
                <img src={children} className="children" alt="children_image" />
                {/* <div className="ellipse"></div> */}
            </div>
        );
    }
}