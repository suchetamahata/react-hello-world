import React,{Component} from 'react'

class Counter extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }

    increment() {
        this.setState =({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    
    render(){
        return (
            <div>
                <div> count = {this.state.count} </div> 
               <button onClick ={() => this.increment()}>INCREMENT</button>
                             
            </div>
        )
    }
}
export default Counter