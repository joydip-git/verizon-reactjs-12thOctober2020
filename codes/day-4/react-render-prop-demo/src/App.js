import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {

  const renderClickCounter = (counterValue, counterHandler) => {
    return (
      <ClickCounter counter={counterValue} changeCounter={counterHandler} name='Joydip' />
    );
  };

  const renderHoverCounter = (counterValue, counterHandler) => {
    return (
      <HoverCounter counterData={counterValue} changeCounterData={counterHandler} data={200} />
    );
  };
  return (
    <div className="App">
      <Counter render={renderClickCounter} />
      <br />
      <br />
      <Counter render={renderHoverCounter} />
    </div>
  );
}

export default App;
