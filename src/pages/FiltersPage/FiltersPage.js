import React, { Component } from 'react';
import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';

import './FiltersPage.css';

export default class FiltersPage extends Component {
    render() { 
        return (
            <div className="filters-page">
                <Header />
                <main className="filters-page__content">
                    <section className="filters-page__description">
                        <Filters />
                    </section>
                </main>
             </div>
        );
    }
}