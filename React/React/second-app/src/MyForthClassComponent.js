import { Component } from "react";

class MyForthClassComponent extends Component {
  state = {
    balance: 0,
  };


  balanceIncrement=(value)=>{
      this.setState({balance:this.state.balance+value})
  };
  profitHandler  = () => {
    console.log("I am being clicked now");
    // this.setState({
    //     balance:this.state.balance+1,
    // })
    // this.state={...this.state,balance:this.state.balance+1};
    //  internal working of the balance:this.state.balance+1;
    
    this.balanceIncrement(1);
  };
  doubleProfitHandler  = () => {
    console.log("I am being clicked now");
    
    this.balanceIncrement(100);
  };
  resetHandler  = () => {
    console.log("I am being clicked now");
    
    this.setState({
        balance:this.state.balance=0
    })
  };

  render() {
    const { name, age } = this.props;
    return (
      <>
        <h1>Hello from My Forth Class Component</h1>
        <h1>
          hello from My Forth Class Component Name:{name}
          Age:{age}
          Balance:{this.state.balance}
        </h1>

        <button onClick={this.profitHandler}>
          Profit
        </button>

        <button onClick={this.doubleProfitHandler}>Double Profit</button>
        <button onClick={this.resetHandler}>Reset</button>
        
      </>
    );
  }
}

export default MyForthClassComponent;
