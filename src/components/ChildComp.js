import React,{Component} from 'react'

function ChildComp(props){
    return(
        <div>
            <button onClick={() => props.welParent('executed child')}> greet parent</button>
        </div>
    )
}

export default ChildComp