import React, { useState, useContext } from "react";
import hookTestContext from "../context/HookTestContext";
import UseContextHookState from "./UseContextHookState";

export default function UseContextHook(props) {
    return(
        <UseContextHookState>
            <Component1></Component1>
            <Component2></Component2>
        </UseContextHookState>


        
    )


    function Component1(props) {
        const context = useContext(hookTestContext);    
        function incrementCount() {
            context.setCount(context.count+1);
            console.log(context.count);
        }
    
        return (
            <div className="container">
                <div className="row py-3" style={{"display":"flex", "justifyItems": "center"}}>
                    <h1>Component 1: </h1><button className="btn btn-secondary" onClick={incrementCount}>{context.count}</button>
                </div>
            </div>
        )
    }

    function Component2(props) {
        const context = useContext(hookTestContext);    
        return (
            <div className="container">
                <div className="row py-3" style={{"display":"flex", "justifyItems": "center"}}>
                    <h1>Component 2: {context.count} </h1>
                </div>
            </div>
        )
    } 
    
}
