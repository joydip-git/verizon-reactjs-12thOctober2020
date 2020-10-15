import React, { useState } from 'react'
const Counter = () => {
    //(obj)=>{ return [stateData,functionToUpdateData]; }
    const [counterState, setCounterState] = useState({ counter: 0, name: 'anil' })
    //const [counterState, setCounterState] = useState(0)
    const [showState, setShowState] = useState(true)
    //const [numberState, setNumberState] = useState([1,2,3,4])
    const increaseCounter = () => {
        setCounterState((ps) => {
            return {
                ...ps,
                counter: ps.counter + 1
            }
        });
        // setCounterState((ps) => {
        //     return ps + 1;
        // });
    }
    const showHandler = () => {
        setShowState((ps) => {
            return !ps;
        });
    }
    return (
        <>
            <span>Counter:&nbsp;{counterState.counter}</span>
            <br />
            <span>Name:&nbsp;{counterState.name}</span>
            {/* <span>Counter:&nbsp;{counterState}</span> */}
            <br />
            <button onClick={increaseCounter}>Increase</button>
            <br />
            <button onClick={showHandler}>{showState ? 'Hide' : 'Show'}</button>
        </>
    );
}
export default Counter;