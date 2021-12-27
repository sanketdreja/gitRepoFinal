import { Component } from "react";

export default class FormComponent extends Component {
  state = {
    name: "",
    age: 0,
  };


  onValueChangehandler = (event) => {
    console.log(event.target.name);
    this.setState({[event.target.name] :event.target.value });
  };

//   onInputAgeChange = (event) => {
//     console.log(event.target.value);
//     this.setState({age:event.target.value });
//   };
  onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log("On Submit");
      console.log(this.state);
      this.setState({name:this.state.name="",
    age:this.state.age=0})

  };

  render() {
    return (
      <>
        <h1>Form Component</h1>
        <form onSubmit={this.onSubmitHandler}>
          <label>Name</label>
          <input name={"name"}   value={this.state.name} onChange={this.onValueChangehandler} />
          <br />
          <label>Age</label>
          <input
            name={"age"}  value={this.state.age}
            onChange={this.onValueChangehandler}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
