import React from 'react'

export default function ClickCounter(props) {
    let { counter, changeCounter } = props;
    return (
        <div>
            <span>Click Counter Value:&nbsp;{counter}</span>
            <br />
            <button onClick={changeCounter}>Click to Increase Counter</button>
        </div>
    )

}
