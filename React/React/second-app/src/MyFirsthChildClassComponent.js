import { array } from "prop-types";
import { Component } from "react";

class MyFirstChildClassComponent extends Component{



    
    
    
render(){
    const {name,arr} = this.props;
    console.log(arr[0]);
    console.log(arr[1]);
    
    return(<div>
    {/* <h1>Name:{name}</h1>
    <button onClick={func}>Profit </button>
    <button onClick={func1}>Loss </button> */}
     <h1>Name:{name}</h1>
     <h1>Arr[0]:{arr[0]}</h1>
     <h1>Arr[1]:{arr[1]}</h1>
</div>)}}
    


  
export default MyFirstChildClassComponent;