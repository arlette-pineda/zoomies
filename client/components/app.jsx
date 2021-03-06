import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './nav-bar';
import Home from './home';
import About from './about';
import DogList from './dog-list';
import Footer from './footer';
import DogDetails from './dog-details';

export default class App extends React.Component {

  render() {
    return (
      <div id="page-container">
        <Router>
          <NavBar/>
          <div >
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/search" component={DogList} />
            <Route path="/dog-details/:dogId" component={DogDetails}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
