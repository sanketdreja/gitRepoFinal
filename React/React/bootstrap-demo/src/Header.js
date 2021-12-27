import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="30"
                  height="24"
                />
                <h2>Header</h2>
              </a>
            </div>
          </nav>
        </div>
        ;
      </div>
    );
  }
}
