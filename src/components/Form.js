import React,{Component} from 'react'
import './FStyle.css'

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
           userName:'',
           comment:'',
           choice: 'cat'
        }
    }
    alterUsername= (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    alterComment= (event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    alterChoice =(event)=> {
        this.setState({
            choice:event.target.value
        })
    }
    displayAll=(event)=>{
        alert(`Welcome ${this.state.userName}.
               Glad you like  ${this.state.choice}. 
               ${this.state.comment}`)
    }

    render(){
        return(
            <div className='bg'>
                <form onSubmit={this.displayAll}>
                    <div className='colouring'>
                        <label>
                            User Name   
                            <input type='text'
                            value={this.state.userName}
                            onChange={this.alterUsername}/>
                        </label>
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                    <div>
                        <label className='mew'>Favourite Pet</label>
                        <select value={this.state.choice} onChange={this.alterChoice}>
                            <option value='dogs'> Dogs </option>
                            <option value='cats'> Cats </option>
                            <option value='cows'> Cows </option>
                            <option value='men'> Human </option>
                        </select>
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                    <div>
                        <label className='pet'>
                            What do you like about your pet?
                            <textarea type='text'
                            value={this.state.comment}
                            onChange={this.alterComment}/>
                        </label>
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                    <div>
                        <button type='submit'> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
 export default Form