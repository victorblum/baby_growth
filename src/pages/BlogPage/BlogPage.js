import React, { Component } from 'react';
import Header from '../../components/Header/Header';

import './BlogPage.css';

export default class BlogPage extends Component {
    render() { 
        return (
            <div className="blog-page">  
                <Header />
                <main className="blog-page__content">
                    <section className="blog-page__description">
                        <h1>Sorry. This page is under construction.</h1>
                    </section>
                </main>
             </div>
        )
    }
}