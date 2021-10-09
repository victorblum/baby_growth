import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LogInPage from './pages/LogInPage/LogInPage';
import FiltersPage from './pages/FiltersPage/FiltersPage';
import PersonalPage from './pages/PersonalPage/PersonalPage';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutPage from './pages/AboutPage/AboutPage';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LogInPage} />
        <Route path="/filters" exact component={FiltersPage} />
        <Route path="/personal" exact component={PersonalPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/about" exact component={AboutPage} />
      </div>
    );
  }
}
