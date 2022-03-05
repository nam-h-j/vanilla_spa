import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
        <h1>${title}</h1>
        <p>
            textArea
        </p>
        <p>
            <a href="/posts" data-nav>View recent posts</a>
        </p>
      `;
  }
}
