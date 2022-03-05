import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  async getHtml() {
    return `
        <h1>Settings Page</h1>
        <p>Setting content 1</p>
        <p>Setting content 2</p>
        <p>Setting content 3</p>
        <p>
            <a href="/" data-nav>View recent Dashboard</a>
        </p>
      `;
  }
}
