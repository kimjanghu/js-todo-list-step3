import Component from "../../core/Component.js";
import TodoMemberAddButton from "./TodoAddMemberButton.js";
import { checkClassList } from "../../utils/utils.js";
import TodoListView from "./TodoList/index.js";

export default class TodoMemberList extends Component {
  render() {
    console.log(this.store.teamTodoList);
    const todoMemberList = this.store.teamTodoList.map((todoList) => TodoListView(todoList)).join("");

    this.$target.insertAdjacentHTML("afterbegin", todoMemberList);
  }
}
