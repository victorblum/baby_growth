import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Registration from '../../components/Registration/Registration';

import './RegistrationPage.css';

export default class RegistrationPage extends Component {
    render() { 
        return (
            <div className="registration-page">  
                <Header />
                <main className="registration-page__content">
                    <section className="registration-page__description">
                        <Registration />
                    </section>
                </main>
             </div>
        )
    }
}