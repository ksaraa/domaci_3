import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarComponent from './NavbarComponent';

import HomeComponent from './HomeComponent';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path='/' exact component={HomeComponent} />
      </Switch>
    </Router>
  );
}

export default App;
