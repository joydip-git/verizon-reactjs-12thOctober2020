import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {

  // const renderClickCounter = (counterValue, counterHandler) => {
  //   return (
  //     <ClickCounter counter={counterValue} changeCounter={counterHandler} name='Joydip' />
  //   );
  // };

  // const renderHoverCounter = (counterValue, counterHandler) => {
  //   return (
  //     <HoverCounter counterData={counterValue} changeCounterData={counterHandler} data={200} />
  //   );
  // };
  return (
    <div className="App">
      {/* <Counter render={renderClickCounter} />
      <br />
      <br />
      <Counter render={renderHoverCounter} /> */}
      <Counter render={
        (counterValue, counterValueHandler) => {
          return <ClickCounter counter={counterValue} changeCounter={counterValueHandler} name={'joydip'} />
        }
      } />
      <br />
      <br />
      <Counter render={
        (counterValue, counterValueHandler) => {
          return <HoverCounter counterData={counterValue} changeCounterData={counterValueHandler} data={200} />
        }
      } />
    </div>
  );
}

export default App;
