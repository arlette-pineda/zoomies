import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Test from './test-page';
import Second from './second-test';
import NavBar from './nav-bar';
import DogList from './dog-list';
import Footer from './footer';
import SearchDrawer from './search-drawer';
import NewSearchDrawer from './new-search-drawer';
import SearchButton from './search-button';
import SearchForm from './search-form';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar/>
        {/* <DogList/> */}
        {/* <SearchButton /> */}
        <SearchForm />
        <Footer/>
        <Route path="/" exact component={Test}/>
        <Route path="/second" component={Second} />
      </Router>
    );
  }
}
