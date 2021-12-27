import { Component } from "react";

export default class Accessiblity extends Component {
  onButtonClickHandler = () => {
    console.log("button Clicked");
  };

  render() {
    return (
      <>
        <h1> I a inside Accesiblity Componnnt </h1>

        {/* htmlFor used to bind the label ith input box
                with the  help of  id and htmlFor */}

        <label htmlFor="name"> Name : </label>
        <input
          id="name"
          name={"name"}
          placeholder="Enter Your Name"
          aria-label={"name"}
          aria-required="true"
        />
        <br />

        <button onClick={this.onButtonClickHandler}>Click Me</button>
        <table border="2">
          <tbody>
            <tr>
              <td>Swapnil</td>
              <td>Aniket</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
