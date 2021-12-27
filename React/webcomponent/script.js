class UserDetail extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "This is our first web Component";
  }
}
window.customElements.define("user-details", UserDetail);
