import React, { useState } from 'react';
import './App.css';
import Demo from './Demo';
//import ClickCounter from './ClickCounter';
//import Counter from './Counter';
//import HoverCounter from './HoverCounter';
import PersonList from './PersonList';

function App() {
  const [valState, setValState] = useState(0);
  const [nameState, setNameState] = useState('joy');
  const [showState, setShowState] = useState(true);
  const [dataState, setDataState] = useState(10);
  return (
    <div className="App">
      <button onClick={() => setDataState(ps => ps + 1)}>IncreaseData</button>
      <br/>
      <br/>
      {/* <Counter /> */}
      {/* <ClickCounter name={'joydip'} />
      <br />
      <br />
      <HoverCounter data={100} /> */}
      {/* <PersonList /> */}
      <button onClick={() => setShowState(ps => { return !ps })}>
        {showState ? 'Hide' : 'Show'}
      </button>
      <br />
      Value:{valState}
      <br />
      <button onClick={() => setValState(ps => ps + 1)}>Increase</button>
      <br />
      {
        showState &&
        (<Demo name={nameState} handler={(newName) => setNameState(newName)} val={valState} />)
      }
    </div>
  );
}

export default App;
