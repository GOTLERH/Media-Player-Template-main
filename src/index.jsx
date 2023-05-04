import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Header />
		<Body />
		<Footer />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));