import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  return (
    <div className="App">      
      {/* <ErrorBoundary> */}
        <Hero heroName={'Batman'} />
        <br />
        <Hero heroName={'Superman'} />
        <br />
        <Hero heroName={'Joker'} />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
/**
 * {
 *   type:,
 *   key:,
 *   ref:,
 *   props:{
 *    info:
 *    children:[Hero]
 *   }
 * }
 */
