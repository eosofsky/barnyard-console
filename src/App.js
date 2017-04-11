import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ConsoleButton extends Component {
  render() {
    return (
      <button className="ConsoleButton" style={{background: this.props.backgroundColor, color: 'white'}}>
	{ this.props.name }
      </button>
    );
  }
}

class ConsoleSlider extends Component {
  render() {
    return (
      <div className="ConsoleSlider">
        <Slider/>
        <div> {this.props.percentage} </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<div className="App-settingsPanel">
	  <div className="App-sliders">
	    <ConsoleSlider percentage={50}/>
	    <ConsoleSlider percentage={50}/>
	  </div>
	  <div className="App-buttons">
	    <ConsoleButton name="reset" backgroundColor='red'/>
	    <ConsoleButton name="debug" backgroundColor='rgb(77,144,255)'/>
	  </div>
	</div>
      </div>
    );
  }
}

export default App;
