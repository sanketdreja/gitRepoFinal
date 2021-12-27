import { Component } from "react";

class MySecondClassComponent extends Component{
    render(){
        const{name,age}=this.props;
        return<div>
            <h1>
                hello from My Second Class Component
                Name:{name}
                Age:{age}
            </h1>
        </div>

    }
}
export default MySecondClassComponent;