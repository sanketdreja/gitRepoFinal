import { Component } from "react";
import MyFirstChildClass from "./MyFirstChildClass";

class ParentOneClass extends Component{
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
             
              Family Balance:{this.state.familyBalance}
            </h1>
            <button onClick={this.familyBalanceIncrement}>Profit</button>
            <button onClick={this.familyBalanceDecrement}>Loss</button>
    
            <MyFirstChildClass name={"Swapnil"} onIncrement={this.familyBalanceIncrement} onExpense={this.familyBalanceDecrement} />
            <MyFirstChildClass name={"Sunil"} onIncrement={this.familyBalanceIncrement} onExpense={this.familyBalanceDecrement} />
          </>
        );
      }
}

export default ParentOneClass;