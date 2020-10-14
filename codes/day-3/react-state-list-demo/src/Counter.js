import React from 'react'
/**
 * {
 * counterValue:0,
 * changeCounter:....
 * }
 * 
 */
export default function Counter({ counterValue, changeCounter }) {
    console.log('[Counter] rendered')
    return (
        <>
            Counter Value: &nbsp;
            <span>{counterValue}</span>
            <br />
            <button onClick={changeCounter}>Increase Counter</button>
        </>
    )
}