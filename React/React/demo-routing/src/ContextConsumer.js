import { Component } from "react";
import ContextCunsumerChild from "./ContextConsumerChild";

export default class ContextConsumer extends Component {
  render() {
    return (
      <>
        <h1> IN ContextCunsumer</h1>
        <ContextCunsumerChild />
      </>
    );
  }
}
