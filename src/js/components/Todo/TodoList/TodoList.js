import Component from "../../../core/Component.js";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    console.log(this.store.todoList);
    const todo = this.store.todoList.map((todo) => TodoItem(todo)).join("");
    this.$target.innerHTML += todo;
  }
}
