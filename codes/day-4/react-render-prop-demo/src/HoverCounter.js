import React from 'react'

function HoverCounter(props) {
    let { counterData, changeCounterData, data } = props;
    return (
        <div>
            Data:&nbsp;{data}
            <br />
            <span>Hover Counter Value:&nbsp;{counterData}</span>
            <br />
            <div onMouseOver={changeCounterData}>Hover to Increase Counter</div>
        </div>
    )
}
export default HoverCounter;
