// import { element } from "prop-types";
import { Component } from "react";

export default class ListComponent extends Component {
  render() {
      const myList=[1,2,3,4,5]
    return (
      <>
        <h1>From List Component</h1>
        {myList.map((element, index) => (
          <div key={index}>
            <h2>Inside the list item</h2>
            <div>{element}</div>
          </div>
        ))}
      </>
    );
  }
}
