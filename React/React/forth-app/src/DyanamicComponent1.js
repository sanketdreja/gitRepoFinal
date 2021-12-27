import { Component } from "react";

export default class DynamicComponent1 extends Component{
    state={
        percentage:0,
        result:"Invalid",
        color:"white"
    }

    onchangeHandler=(event)=>{
        this.setState({percentage:event.target.value});
        
    }
     resultCheck=()=>{
        let resultObj={result:"Invalid", color:"White"}
        
        const percentage = this.state.percentage;
        if (0 < percentage && percentage <= 35) {
            resultObj={result:"Fail", color:"red"}
          
        } else if (35 < percentage && percentage <= 50) {
          
            resultObj={result:"Just Pass", color:"Orange"}
        } else if (50 < percentage && percentage <= 65) {
            resultObj={result:"Second Class", color:"Yellow"}
        } else if (65 < percentage && percentage <= 75) {
            resultObj={result:"First Class", color:"Green"}}

        else if (75 < percentage && percentage <= 100) {
        resultObj={result:"Distinction", color:"Violet"}
     return  resultObj;
    }
          
     }
     onClickHandler=(percentage)=>{

        const {result,color}=this.resultCheck(percentage);
            this.setState({result,color});

     }


    render(){
        return(
            <div>
                <h1>Enter Marks</h1>
                <input onChange={this.onchangeHandler}/>
                <button onClick={}>Result</button>
                <div style={{background:this.state.color}}>
                    <h1>Result:{this.state.result}</h1>
                </div>
            </div>
        )
    }
}