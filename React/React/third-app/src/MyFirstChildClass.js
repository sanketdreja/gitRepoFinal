import { Component, useDebugValue } from "react";
import ParentOneClass from "./ParentOneClass";

class MyFirstChildClass extends Component {
  state = {
    balance: 0,
  };
  childBalance = (value) => {
    this.setState({ balance: this.state.balance + value });
    console.log("Hello");
  };

  

  render() {
    const { name, onIncrement, onExpense } = this.props;
    
    const onClickProfit = () => {
      this.childBalance(1);
      onIncrement();  
    
    };
    const onClickExpense = () => {

      this.childBalance(-1);
      onExpense();
     
      
    };

    
    return (
      <div>
        <h1>Name:{name}</h1>
        <h1>Balance:{this.state.balance}</h1>

        <button onClick={onClickProfit} >Profit </button>
        <button onClick={onClickExpense}>Expense </button>
      </div>
    );
  }
}

export default MyFirstChildClass;
