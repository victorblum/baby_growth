import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import nipple from './nipple.png'

export default class Header extends Component {
    render() { 
        return (
            <header className="header">
                <Link className="nav-link" to="/"><div className="logo">
                <h1 className="header__title">
                        Baby &ensp;&ensp; Growth
                    </h1>
                    <img src={nipple} className="nipple" alt="nipple_image" />
                </div>
                </Link>
                <div class="menu_list">
                        <ul>
                        <Link className="nav-link" to="/"><li>Home</li></Link>
                        <Link className="nav-link" to="/filters"><li>Filters</li></Link>
                        <Link className="nav-link" to="/personal"><li>Personal page</li></Link>
                        <Link className="nav-link" to="/blog"><li>Blog</li></Link>
                        <Link className="nav-link" to="/about"><li>About</li></Link>
                        </ul>
                </div>
                <Link className="nav-link" to="/login"><button type="button" className="login">LOG IN</button></Link>
            </header>
        );
    }
}
