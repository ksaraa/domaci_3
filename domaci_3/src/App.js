import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarComponent from './NavbarComponent';

import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent';
import AboutComponent from './AboutComponent';

function App() {
  return (
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" Component={HomeComponent}>
          </Route>
          <Route path="/about" Component={AboutComponent}>
          </Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </Router>

  );
}

export default App;
