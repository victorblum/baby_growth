import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FiltersPage from './pages/FiltersPage/FiltersPage';
import PersonalPage from './pages/PersonalPage/PersonalPage';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutPage from './pages/AboutPage/AboutPage';
import LogEnterPage from './pages/LogEnterPage/LogEnterPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LogEnterPage} />
        <Route path="/filters" exact component={FiltersPage} />
        <Route path="/personal" exact component={PersonalPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/registration" exact component={RegistrationPage} />
        <div className="ellipse"></div>
      </div>
    );
  }
}
