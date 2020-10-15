import React from 'react'
import useCounter from './useCounter';

const ClickCounter = ({ name }) => {
    const [counter, changeCounter] = useCounter(20);
    return (
        <div>
            Name:&nbsp;{name}
            <br />
            Click Counter Value:&nbsp;
            <input type='text' value={counter} />
            <br />
            <button onClick={changeCounter}>Click to Increase Counter</button>
        </div>
    )
}

export default ClickCounter;

