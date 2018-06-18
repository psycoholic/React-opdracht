import React, { Component } from 'react';
import logo from './Designwayblack.png';
import './App.css';

class textForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('The input is ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Way design</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <form onSubmit={this.handleSubmit}>
      <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <button type="submit">Submit!</button>
      </form>
      <footer>
        <div><p>This is a Footer</p></div>  
      </footer>
    </div>
    );
  }
}

export default textForm;
// export default App;
