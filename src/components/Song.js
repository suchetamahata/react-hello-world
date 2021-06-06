import React,{Component} from 'react'

function Song({listVal}){
    return(
        <div>
            <h2>
                Introducing {listVal.name} all she does is {listVal.job}
            </h2>
        </div>
    )
}

export default Song