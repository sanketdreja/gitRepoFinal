import { Component } from "react";
import axios from "axios";

export default class User extends Component {
  state = {
    users: [],
    address: [],

    userObject: {
      id: 1,
      name: "",
      userName: "",
    },
    isEditMode: false,
  };

  onClickDeleteHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };
  onClickEditHandler = (id) => {
    const editObject = this.state.users.find((user) => user.id === id);
    if (editObject) {
      this.setState({ userObject: editObject, isEditMode: true });
    }
  };

  render() {

    return (
    <div>
         <h1>IN THE USER</h1>
        <h1>In Posts</h1>
        <form onSubmit={this.onFormSubmitClick}>
          <label>Title</label>
          <input
            name="title"
            value={this.state.postObject.title}
            onChange={this.onChangeHandler}
          />
          <label>Body</label>
          <input
            name="body"
            value={this.state.postObject.body}
            onChange={this.onChangeHandler}
          />
          <button type="submit">
            {this.state.isEditMode ? "Update" : "Submit"}
          </button>
          <button onClick={this.onCancelClickhandler}>Cancel</button>
        </form>
        {this.state.users.map((user, index) => {
         return (
        <>
          <div key={index}>
            {user.id},{user.name},
            <br />
            <button
              onClick={() => {
                this.onClickDeleteHandler(user.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.onClickEditHandler(user.id);
              }}
            >
              Edit
            </button>
          </div>
        </>
        );}
  
    
    </div>);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
  }
}
