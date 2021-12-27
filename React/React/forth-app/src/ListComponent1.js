import { element } from "prop-types";
import { Component } from "react";

export default class ListComponent1 extends Component{

    state={
        myList:[],
        inputValue:""
    };
    onAdd=()=>{
        console.log("On Add");
        const myListCopy=this.state.myList;
        console.log(myListCopy);
        myListCopy.push(this.state.inputValue);
        this.setState({myList:myListCopy,inputValue:""});
        
    };
    onInputTextChange=(event)=>{
        console.log(event.target.value);
        this.setState({inputValue:event.target.value});
    }

   
    render(){
        // const {name}=this.props;
        
        
        return(<div>

            <h1>My To-Do-List App</h1>
            <input value={this.state.inputValue}
            onChange={this.onInputTextChange} />
            <button onClick={this.onAdd}>Add</button>
            {this.state.myList.map((element,index)=>(
                <div key={index}>
                    <div>{element}</div>
                </div>
            ))}
            </div>
        );
    }
}