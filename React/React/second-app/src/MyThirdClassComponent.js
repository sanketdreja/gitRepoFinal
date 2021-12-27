import { Component } from "react";

class MyThirdClassComponent extends Component{
    state={
        balance:0,
    }
    
    render(){
        const{name,age}=this.props;
        return<div>
            <h1>
                hello from My Second Class Component
                Name:{name}
                Age:{age}
                Balance:{this.state.balance}
            </h1>
        </div>

    }
}
export default MyThirdClassComponent;