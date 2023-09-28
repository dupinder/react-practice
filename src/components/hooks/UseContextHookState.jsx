import {useState} from "react";
import HookTestContext from "../context/HookTestContext";

const UseContextHookState = (props) => {
    const [count, setCount] = useState(0);

    const val = {
        "count" : count,
        "setCount" : setCount
    }
    return (
        <HookTestContext.Provider value={val}>
            {props.children}
        </HookTestContext.Provider>
    )
}

export default UseContextHookState;