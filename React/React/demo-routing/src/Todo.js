import axios from "axios";
import { Component } from "react";

export default class Todo extends Component {
  state = {
    todos: [],
    todoObject: {
      title: "",
      completed: false,
      userId: 1,
    },
    isEditMode: false,
  };

  onDeleteClickhandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };

  onEditClickhandler = (id) => {
    const editObject = this.state.todos.find((todo) => todo.id === id);
    if (editObject) {
      this.setState({
        todoObject: editObject,
        isEditMode: true,
      });
    }
  };
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    const todoObjectCopy = this.state.todoObject;
    todoObjectCopy[name] = value;
    this.setState({ todoObject: todoObjectCopy, isEditMode: true });
  };
  onCancelClickHandler = (event) => {
    event.preventDefault();
    this.resetState();
  };
  resetState = () => {
    this.setState({
      todoObject: {
        title: "",
        completed: false,
        userId: 1,
      },
      isEditMode: false,
    });
  };
  onFormSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.isEditMode) {
      axios
        .put(
          "https://jsonplaceholder.typicode.com/todos/" +
            this.state.todoObject.id,
          this.state.todoObject
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Updated");
          this.resetState();
        });
    } else {
      axios
        .post(
          "https://jsonplaceholder.typicode.com/todos",
          this.state.todoObject
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Created");
          this.resetState();
        });
    }
  };

  render() {
    return (
      <div>
        <h1>In TODO</h1>
        <form onSubmit={this.onSubmitClickHandler}>
          <label>Title</label>
          <input
            name="title"
            value={this.state.todoObject.title}
            onChange={this.onChangeHandler}
          />
          <label>completed</label>
          <input
            name="completed"
            value={this.state.todoObject.completed}
            onChange={this.onChangeHandler}
          />
          <button type="submit">
            {this.state.isEditMode ? "Update" : "Submit"}
          </button>
          <button onClick={this.onCancelClickHandler}>Cancel</button>
        </form>
        {this.state.todos.map((todo, index) => {
          return (
            <div key={index}>
              {index + 1},{todo.title}
              <br />
              <button
                onClick={() => {
                  this.onDeleteClickhandler(todo.id);
                }}
              >
                Delete
              </button>
              <br />
              <button
                onClick={() => {
                  this.onEditClickhandler(todo.id);
                }}
              >
                Edit
              </button>
              <br />
            </div>
          );
        })}
        <br />
      </div>
    );
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      this.setState({ todos: response.data });
    });
  }
}
