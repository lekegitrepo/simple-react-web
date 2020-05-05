import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Footer from './components/footerComponent/footer';
import './assets/css/default.min.css';
import './assets/css/style.min.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className= 'App'>
          <Header />
            <main className='main-content'>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Products' component={Products} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/About' component={About} />
            </main>
          {/*<Footer />*/}
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
