import logo from "./logo.svg";
import "./App.css";
import NormalProps from "./NormalProps";
import Incrementor from "./Incrementor";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import { createElement, useState } from "react";
import Decrementor from "./Decrementor";
import Decrement from "./Decrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";

function App() {
  return (
    <div className="App">
      {/* <NormalProps
        render={(someValue) => {
          return "Old Name " + someValue;
        }}
      /> */}

      {/* <Incrementor
        render={(value, onClickHandler) => {
          return (
            <>
              <Increment value={value} onClickHandler={onClickHandler} />;
            </>
          );
        }}
      />
      <Incrementor
        render={(value, onClickHandler) => {
          return (
            <>
              <NewIncrement value={value} onClickHandler={onClickHandler} />;
            </>
          );
        }}
      />

      <Decrementor
        render={(value, onClickHandler) => {
          return <Decrement value={value} onClickHandler={onClickHandler} />;
        }}
      /> */}
      {/* <DemoComponent /> */}

      <Reconciliation />
    </div>
  );
}

export default App;
