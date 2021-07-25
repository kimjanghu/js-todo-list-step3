import Component from "../core/Component.js";

export default class Title extends Component {
  render() {
    this.$target.innerHTML = `
      <span><strong>Hi</strong>'s Todo Lists</span>
    `;
  }
}
