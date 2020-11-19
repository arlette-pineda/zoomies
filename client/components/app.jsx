import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Test from './test-page';
import Second from './second-test';
import NavBar from './nav-bar';
import Footer from './footer';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar/>
        <div>
          <p>We&apos;re adding Routing!</p>
        </div>
        <Footer/>
        <Route path="/" exact component={Test}/>
        <Route path="/second" component={Second} />

      </Router>
    );
  }
}
