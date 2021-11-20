import React from 'react';
import '../styles/App.css';
import MainContent from './MainContent';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MovieDetails from './MovieDetails';
import Schedule from './Schedule';
import OnScreen from './OnScreen';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
      <div className="containerMain_Nav">
        <Nav />
        <Switch>
          <Route exact path="/" component={ MainContent }></Route>
          <Route exact path="/movies" component={ OnScreen }></Route>
          <Route exact path="/movies/:title" component={ MovieDetails }></Route>
          <Route exact path="/schedule" component={ Schedule }></Route>
        </Switch>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
