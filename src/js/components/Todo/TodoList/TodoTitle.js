import Component from "../../../core/Component.js";

export default class TodoTitle extends Component {
  render() {
    this.$target.innerHTML = `
      <h2 class="member-title">
        <span><strong>${this.store.memberName}</strong>'s Todo List</span>
      </h2>
    `;
  }
}
