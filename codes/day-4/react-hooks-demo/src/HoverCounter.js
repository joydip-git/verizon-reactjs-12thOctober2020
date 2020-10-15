import React from 'react'
import useCounter from './useCounter';

function HoverCounter({data}) {
    
    const [counterData, changeCounterData] = useCounter(10);
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
export default HoverCounter