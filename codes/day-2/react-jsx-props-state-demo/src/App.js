import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

//state, setState(args):void, render():ReactNode
class App extends Component {
  constructor() {
    super();//Component.call(this,...);
  }

  //console.log('app rendered')
  //const welcomeElement = Welcome({data:20});
  // let value = 20;
  // const changeValueHandler = function (e) {
  //   console.log(e.target.value)
  //   value = parseInt(e.target.value);
  //   console.log(value)
  // }

  render() {
    const welcomeElement = Welcome({ data: 20 });
    return (
      <div className="App" >
        {/* {welcomeElement} */}
        {/* <Welcome data={20} /> */}
        {welcomeElement}
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
