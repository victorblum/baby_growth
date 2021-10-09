import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';

import './AboutPage.css';

export default class AboutPage extends Component {
    render() { 
        return (
            <div className="about-page">  
                <Header />
                <main className="about-page__content">
                    <section className="about-page__description">
                        <About />
                    </section>
                </main>
             </div>
        )
    }
}