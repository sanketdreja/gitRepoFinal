import { Component } from "react";

export default class FormListComponent extends Component {
  state = {
    name: "",
    age: 0,
    mobile: 0,
    myList: []
  };

  onValueChangehandler = (event) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("On Submit");
    this.onAdd();
    console.log(this.state.myList);

    this.setState({name: (this.state.name = "")});
    this.setState({age: (this.state.age =0)});
    this.setState({mobile: (this.state.mobile =0)});
    
  };
  onAdd = () => {
    console.log("On Add");
    const myListCopy = this.state.myList;
    console.log(myListCopy);
    myListCopy.push(<h2>My Name is {this.state.name} , My age is {this.state.age} .Please Contact me On {this.state.mobile} "</h2>);
    this.setState({ myList: myListCopy });
    console.log("list updated");
  };
  render() {
    return (
      <>
        {/* <h1>Form Component</h1> */}
        <form onSubmit={this.onSubmitHandler}>
          <label>Name :</label>
          <input
            name={"name"}
            value={this.state.name}
            onChange={this.onValueChangehandler}
          />
          <br />
          <label>Age</label>
          <input
            name={"age"}
            value={this.state.age}
            onChange={this.onValueChangehandler}
          />
          <br />
          <label>Mobile No :</label>
          <input
            name={"mobile"}
            value={this.state.mobile}
            onChange={this.onValueChangehandler}
          />
          <br />

          <button type="submit">Submit </button>

          
        </form>
        {this.state.myList.map((element, index) => (
          <div key={index}>
            <div>{element}</div>
          </div>
        ))}
      </>
    );
  }
}
