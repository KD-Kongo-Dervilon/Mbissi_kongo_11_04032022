import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rental from './pages/Rental';
import About from  './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        {/* <GlobalStyle> */}
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/location">
              <Rental />
            </Route>
            <Route path="/a-propos">
              <About />
            </Route>
            <Route>
              <Error />
            </Route>
        </Switch>
        <Footer />
        {/* </GlobalStyle> */}
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
