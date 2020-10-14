import React, { Component } from 'react'
/**
 * {
 * counterValue:0,
 * changeCounter:....
 * }
 * 
 */
// export default function Counter({ counterValue, changeCounter }) {
//     console.log('[Counter] rendered')
//     return (
//         <>
//             Counter Value: &nbsp;
//             <span>{counterValue}</span>
//             <br />
//             <button onClick={changeCounter}>Increase Counter</button>
//         </>
//     )
// }
export default class Counter extends Component {
    constructor() {
        super()
        this.counterInputRef = React.createRef();
    }

    focusCounterInputHandler = () => {
        this.counterInputRef.current.focus();
    }
    render() {
        const { counterValue, changeCounter } = this.props;
        console.log('[Counter] rendered')
        return (
            <>
                Counter Value: & nbsp;
                <input value={counterValue} type='text' ref={this.counterInputRef} />
                <br />
                <button onClick={changeCounter}>Increase Counter</button>
            </>
        )
    }
}