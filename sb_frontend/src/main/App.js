import React, { Component } from 'react';
import './App.css';
import imagen5 from '../../imgs/imagen5.jpg';

class NavBar extends Component {
	render() {
		return (
			<nav className="transparent">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a className="white-text" href="sass.html">Saas</a></li>
            <li><a className="white-text" href="badges.html">Bai</a></li>
            <li><a className="white-text" href="collapsible.html">Ok</a></li>
            <li><a className="white-text" href="mobile.html">Jeje</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Nada</a></li>
            <li><a href="badges.html">Nada</a></li>
            <li><a href="collapsible.html">Nada</a></li>
            <li><a href="mobile.html">Nada</a></li>
          </ul>
        </div>
      </nav>
		);
	};	
}

class App extends Component {
  render() {
    return (
    	<div className="hola">
	      <NavBar />
	    </div>
    );
  }
}

export default App;
