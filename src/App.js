import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <NavMenu />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
