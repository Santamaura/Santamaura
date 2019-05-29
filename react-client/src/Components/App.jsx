import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Contact from './Contact';
import Resume from './Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="contact" path="/contact" component={Contact} />
            <Route name="resume" path="/resume" component={Resume} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;