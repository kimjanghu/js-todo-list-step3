import Component from "../../../core/Component.js";
import { $ } from "../../../utils/utils.js";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    this.$target = $(`.todo-list[data-member-id="${this.store.todoId}"]`);
    const todo = this.store.todoList.map((todo) => TodoItem(todo)).join("");
    /**
     * this.$target은 안되는 이유???
     * this.$target.innerHTML = todo;
     */
    this.$target.innerHTML = todo;
  }

  bindEvents() {
    console.log($(".todoapp-list-container"));
    /**
     * this.$target.addEventListener가 안되는 이유가 뭘까???
     */
    $(".todoapp-list-container").addEventListener("click", ({ target }) => {
      const parentTarget = target.closest(`.todo-list[data-member-id="${this.store.todoId}"]`);

      if (!parentTarget) return;

      target && console.log(1);
    });
  }
}
