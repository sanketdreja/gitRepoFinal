import PersonFormComponent from "./PersonFormComponent";
import PersonListComponent from "./PersonListComponent";

const { Component } = require("react");

export default class PersonComponent extends Component {
  render() {
    return (
      <>
        <h1>Person Master</h1>
        <br />
        <div className={"row"}>
          <div className={"col-md-5"}>
            {" "}
            <PersonFormComponent />{" "}
          </div>
          <div className={"col-md-7"}>
            <PersonListComponent />{" "}
          </div>
        </div>
      </>
    );
  }
}
