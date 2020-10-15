import React, { forwardRef } from 'react'
import withCounter from './withCounter';

let ClickCounter = (props) => {
    let { counter, changeCounter, name } = props;
    return (
        <div>
            Name:&nbsp;{name}
            <br/>
            Click Counter Value:&nbsp;<input type='text' value={counter} />
            <br />
            <button onClick={changeCounter}>Click to Increase Counter</button>
            {/* <input type='text' ref={ref} /> */}
        </div>
    )
}

// ClickCounter = withCounter(ClickCounter);
// export default ClickCounter;
export default withCounter(ClickCounter, 10);
