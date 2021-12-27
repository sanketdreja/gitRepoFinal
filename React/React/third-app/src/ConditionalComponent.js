import { Component } from "react";
import TextSwitch from "./TextSwitch";

class ConditionalComponent extends Component {
    
  state = {
    showText: true,
  };
  
  onClickEvent = () => {
    this.setState({showText:!this.state.showText})
  };

  render() {
    
    return (
      <div>
        <h1> Hi from the Conditional Component </h1>
        {this.state.showText && <TextSwitch />}
        <button onClick={this.onClickEvent}>
          {this.state.showText ? <h2>Hide</h2> : <h2>Show</h2>}{" "}
        </button>
      </div>
    );
  }
}
export default ConditionalComponent;
