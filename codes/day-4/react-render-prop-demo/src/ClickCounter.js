import React, { forwardRef } from 'react'

const ClickCounter = (props) => {
     let { counter, changeCounter, name } = props;
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

