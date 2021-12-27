// import { element } from "prop-types";
import { Component } from "react";

export default class ListComponent extends Component {
  render() {
    return (
      <>
        <h1>From List Component</h1>
        {MediaQueryList.map((element, index) => (
          <div key={index}>
            <h2>Inside the list item</h2>
            <div>{element}</div>
          </div>
        ))}
      </>
    );
  }
}
