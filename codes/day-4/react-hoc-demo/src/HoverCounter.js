import React from 'react'

export default function HoverCounter(props) {
    let { counter, changeCounter } = props;
    return (
        <div>
            <span>Hover Counter Value:&nbsp;{counter}</span>
            <br />
            <div onMouseOver={changeCounter}>Hover to Increase Counter</div>
        </div>
    )

}