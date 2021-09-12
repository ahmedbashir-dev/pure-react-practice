import React from 'react';
import ReactDOM from 'react-dom';
import { HookCounter } from './components/HookCounter';

function HelloWorld(){
    return(
        <div>
            <Hello/> <World/>
            <SubmitButton/>
        </div>
    );
}

function Hello(){
    return <span>Hello</span>
}

function World(){
    return <span>World</span>
}

function SubmitButton(){
    const label = "Button Label";
    return (
        <button>{label}</button>
    );
}

ReactDOM.render(<HookCounter/>, document.querySelector("#root"));