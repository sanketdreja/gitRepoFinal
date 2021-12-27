import { Component } from "react";

class MyChildClassComponent extends Component{



    
    
    
render(){
    const {name,func,func1} = this.props;
    return(<div>
    <h1>Name:{name}</h1>
    <button onClick={func}>Profit </button>
    <button onClick={func1}>Loss </button>

</div>)}}
    


  
export default MyChildClassComponent;