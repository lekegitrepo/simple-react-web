import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';
import Footer from './components/footerComponent/footer';
import './assets/css/default.min.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className= 'App'>
          <Header />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Products' component={Products} />
          <Footer />
        </div>
      </Router>
    )
  }
}

/*function App() {
  return (
    <div className="App">
      
    </div>
  );
}*/

export default App;
