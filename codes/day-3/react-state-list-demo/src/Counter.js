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
/*
export default class Counter extends Component {
    constructor() {
        super()
        this.counterInputRef = React.createRef();
    }

    focusCounterInputHandler = () => {
        //this.counterInputRef.current.focus();
        return this.counterInputRef.current;
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
*/
/**
 * {
 *  x:{counterValue:0, chnageCounter:<handler>}
 *  ref:reference to the RefObj
 * }
 */
const Counter = React.forwardRef((properties, referenceOfRefObj) => {
    const { counterValue, changeCounter } = properties;
    console.log('[Counter] rendered')

    return (
        <>
            Counter Value: &nbsp;
            <input value={counterValue} type='text' ref={referenceOfRefObj} />
            <br />
            <button onClick={changeCounter}>Increase Counter</button>
        </>
    )
})
export default Counter;