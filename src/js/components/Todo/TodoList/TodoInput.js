import api from "../../../api/api.js";
import Component from "../../../core/Component.js";

import { $ } from "../../../utils/utils.js";

export default class TodoInput extends Component {
  render() {
    this.$target.innerHTML = `
      <input data-input-id=${this.store.todoId} class="new-todo" placeholder="할 일을 입력해주세요." autofocus />
    `;
  }

  bindEvents() {
    $(".todoapp-list-container").addEventListener("keyup", (e) => this.onKeyUpInput(e));
  }

  async onKeyUpInput({ key, target }) {
    if (target.dataset.inputId !== this.store.todoId) return;
    if (key !== "Enter") return;
    const contents = target.value;
    const todo = await api.postTodo(this.props.teamId, this.store.todoId, { contents });
    this.store.addTodo(todo);
    this.store.notifyObservers();
    target.value = "";
  }
}
