import { useState } from "react";

const useCounter = (initialCounter) => {

    const [counterState, setCounterState] = useState(initialCounter);
    const increaseCounter = () => {
        setCounterState(ps => {
            return ps + 1;
        })
    }

    return [counterState, increaseCounter];
}
export default useCounter;