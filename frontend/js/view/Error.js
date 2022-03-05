import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Error");
  }
  async getHtml() {
    return `
        <h1>404 not found</h1>
        <a href="/" data-nav>View recent Dashboard</a>
      `;
  }
}
