import React, {Component} from 'react'

function FunctionClick(){

    function EventHandler() {
        console.log('button clicked')
    }
    return(
        <div>
            <button onClick={EventHandler}> click </button>
        </div>
    )
}
export default FunctionClick
