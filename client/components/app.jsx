import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './nav-bar';
import Home from './home';
import About from './about';
import DogList from './dog-list';
import Footer from './footer';

export default class App extends React.Component {

  render() {
    return (
      <div id="page-container">
        <Router>
          <NavBar/>
          <div id="content-wrap">
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/search" component={DogList} />
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
