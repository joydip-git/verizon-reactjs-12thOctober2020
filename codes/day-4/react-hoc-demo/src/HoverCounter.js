import React from 'react'
import withCounter from './withCounter';

// let HoverCounter = (props) => {
function HoverCounter(props) {
    let { counter, changeCounter, data } = props;
    return (
        <div>
            Data:&nbsp;{data}
            <br/>
            <span>Hover Counter Value:&nbsp;{counter}</span>
            <br />
            <div onMouseOver={changeCounter}>Hover to Increase Counter</div>
        </div>
    )
}
//fm = fm.bind(this);
//HoverCounter = withCounter(HoverCounter);
//export default HoverCounter;
export default withCounter(HoverCounter, 20);
