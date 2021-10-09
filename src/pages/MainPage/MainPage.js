import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Description from '../../components/Description/Description';

import './MainPage.css';

export default class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__description">
                        <Description />
                    </section>
                </main>
             </div>
        );
    }
}