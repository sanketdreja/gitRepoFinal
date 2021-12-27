import { Component } from "react";
import MyChildClassComponent from "./MyChildClassComponent";

class MyFifthClassComponent extends Component{
  state = {
    familyBalance:0,
  };

  familyBalanceoperation =(value) => {
    this.setState({ familyBalance: this.state.familyBalance+ value });
  };
familyBalanceIncrement=()=>{
  this.familyBalanceoperation(+1);
  return(<div>
    console.log("From familyBalanceIncrement");
  </div>)
}
familyBalanceDecrement=()=>{
  this.familyBalanceoperation(-1);
  return(<div>
    console.log("From familyBalanceDecrement");
  </div>)
}

  render() {
    
    return (
      <>
       
        <h1>Parent</h1>
        <h1>
          hello from My Fifth Class Component 
          familyBalance:{this.state.familyBalance}
        </h1>
        <button onClick={this.familyBalanceIncrement}>Profit</button>
        <button onClick={this.familyBalanceDecrement}>Loss</button>

        <MyChildClassComponent name={"Ankur"} func={this.familyBalanceIncrement} func1={this.familyBalanceDecrement} />
      </>
    );
  }
}

export default MyFifthClassComponent;
