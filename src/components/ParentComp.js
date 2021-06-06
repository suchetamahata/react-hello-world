import React,{Component} from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component{

    constructor(props){
        super(props)
        this.state = {
            parentName: 'parent'
        }
        this.welcomeParent= this.welcomeParent.bind(this)
    }
    welcomeParent(childParam){
        alert(`hello ${this.state.parentName} from ${childParam}`)
    }
    render(){
        return(
            <div>
                <ChildComp welParent={this.welcomeParent}></ChildComp>
                
            </div>
        )
    }
}

export default ParentComp