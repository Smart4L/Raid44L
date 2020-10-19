import React from 'react';
import { HashRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Sponsors from "./components/sponsors/Sponsors";
import Galerie from "./components/galerie/Galerie";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/sponsors" component={withRouter(Sponsors)} />
        <Route exact path="/galerie" component={withRouter(Galerie)} />
        <Route exact path="/contact" component={withRouter(Contact)} />
      </Switch>
  </Router>
  );
}

export default App;
