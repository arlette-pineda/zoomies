import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Test from './test-page';
import Second from './second-test';
import NavBar from './nav-bar';
import DogList from './dog-list';
import Footer from './footer';
import SearchButton from './search-button';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar/>
        {/* <DogList/> */}
        <SearchButton />
        <Footer/>
        <Route path="/" exact component={Test}/>
        <Route path="/second" component={Second} />
      </Router>
    );
  }
}
