import React from "react";

function Hello() {
    
    const sayHello = () => {
        console.log("hello");
    };
    
    return (
        <div>
            <button onClick={sayHello}>Hello</button>
            <h2>This is the Hello component</h2>
        </div>
    );
}

export default Hello;