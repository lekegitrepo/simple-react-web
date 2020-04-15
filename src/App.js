import React from 'react';
import Header from './components/headerComponent/header'
import './assets/css/default.min.css'

class App extends React.Component {
  render () {
    return (
      <div className= 'App'>
        <Header />
      </div>
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
