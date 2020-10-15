import React, { createRef } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function Counter() {
    // const inputClickCounterRef = createRef();
    // const focusInput = () => {
    //     console.log(inputClickCounterRef)
    //     console.log(inputClickCounterRef.current)
    //     inputClickCounterRef.current.focus();
    // }
    return (
        <div>
            {/* <ClickCounter ref={inputClickCounterRef} /> */}
            <ClickCounter name={'joydip'} />
            <br />
            {/* <button onClick={focusInput}>Focus</button> */}
            <br />
            <HoverCounter data={200} />
        </div>
    )

}
