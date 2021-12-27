import { Component } from "react";

export default class DynamicComponent extends Component {
  state = {
    result: "Invalid",
    percentage: 0,
    backgroungColor: ["red", "orange", "yellow", "green", "violet"],
    colorUpdate: "white",
  };

  clickValueHandler = () => {
    const percentage = this.state.percentage;
    if (0 < percentage && percentage <= 35) {
      this.setState({
        colorUpdate: this.state.backgroungColor[0],
        result: "Fail",
      });
      console.log("35", percentage);
    } else if (35 < percentage && percentage <= 50) {
      this.setState({
        colorUpdate: this.state.backgroungColor[1],
        result: "Just pass",
      });
      console.log(50);
    } else if (50 < percentage && percentage <= 65) {
      this.setState({
        colorUpdate: this.state.backgroungColor[2],
        result: "Second Class",
      });
    } else if (65 < percentage && percentage <= 75) {
      this.setState({
        colorUpdate: this.state.backgroungColor[3],
        result: "First Class",
      });
    } else if (75 < percentage && percentage <= 100) {
      this.setState({
        colorUpdate: this.state.backgroungColor[4],
        result: "Distinction",
      });
    }

    return <h1>Result:{this.state.result}</h1>;
  };
  onChangeHandler = (event) => {
    console.log(this.state.percentage);
    this.setState({ percentage: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Enter Your Marks</h1>
        <input onChange={this.onChangeHandler} />

        <div style={{ background: this.state.colorUpdate }}>
          {" "}
          <button onClick={this.clickValueHandler}>Check Result</button>
          <h1>Result:{this.state.result}</h1>
        </div>
      </div>
    );
  }
}
