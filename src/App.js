import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from "./components/Home";

function App() {
  return (
      <Router>
        <div className="App">
            <Home />


        </div>

      </Router>
  );
}

export default App;
