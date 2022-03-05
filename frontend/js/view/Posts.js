import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  async getHtml() {
    return `
        <h1>Posts Page</h1>
        <p>
            <a href="/" data-nav>View recent Dashboard</a>
        </p>
      `;
  }
}
