import React, { Component } from 'react';
import Header from '../../components/Header/Header';


import './PersonalPage.css';

export default class PersonalPage extends Component {
    render() { 
        return (
            <div className="personal-page">  
                <Header />
                <main className="personal-page__content">
                    <section className="personal-page__description">
                    <h1>Sorry. This page is under construction.</h1>
                    </section>
                </main>
             </div>
        )
    }
}