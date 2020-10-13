import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

//state, setState(args):void, render():ReactNode
class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 20,
      name: 'joydip'
    }    
    //this.changeValueHandler = this.changeValueHandler.bind(this);
  }

  changeValueHandler = (e) => {
    //console.log(this)
    //console.log(e)
    let newValue = parseInt(e.target.value);
    console.log(newValue)
    //this.state.value = newValue;
    this.setState(
      {
        value: newValue
      },
      () => console.log(this.state.value)
    );
    // console.log(this.state.value)
    // setTimeout(() => {
    //   console.log(this.state.value)
    // }, 1000);

  }

  //lifecycle event hook
  render() {
    //const welcomeElement = Welcome({ data: 20 });
    return (
      <div className="App" >
        Random Text:&nbsp;{this.props.randomText}
        {/* {welcomeElement} */}
        <Welcome data={this.state.value} name={this.state.name} handler={this.changeValueHandler} />
        <br />
        {/* <Welcome data={this.state.value} handler={this.changeValueHandler.bind(this)} /> */}
      </div>
    );
  }
}
/**
 * {
 *   data:20
 * }
 */

export default App;
