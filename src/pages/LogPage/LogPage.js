import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

import './LogPage.css';

export default class LogPage extends Component {
    render() { 
        return (
            <div className="login-page">  
                <Header />
                <main className="login-page__content">
                    <section className="login-page__description">
                        <Login />
                    </section>
                </main>
             </div>
        )
    }
}