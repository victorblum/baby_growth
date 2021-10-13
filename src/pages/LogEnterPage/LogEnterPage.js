import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import './LogEnterPage.css';

export default class LogEnterPage extends Component {
    render() { 
        return (
            <div className="enter-page">  
                <Header />
                <main className="enter-page__content">
                    <section className="enter-page__description">
                        <Login />
                    </section>
                </main>
             </div>
        )
    }
}