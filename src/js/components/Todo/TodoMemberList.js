import Component from "../../core/Component.js";
import TodoMemberAddButton from "./TodoAddMemberButton.js";
import { checkClassList } from "../../utils/utils.js";
import TodoListView from "./TodoList/index.js";

export default class TodoMemberList extends Component {
  render() {
    console.log(this.store.teamTodoList);
    const todoMemberList = this.store.teamTodoList
      .map((todoList) => TodoListView(this.createDOM(todoList), todoList, this.store.teamId))
      .join("");
    this.$target.insertAdjacentHTML("afterbegin", todoMemberList);
  }

  createDOM(todoList) {
    const todoContainer = document.createElement("li");
    todoContainer.classList.add("todoapp-container");
    todoContainer.id = todoList._id;
    todoContainer.innerHTML = `
      <h2 class="member-title"></h2>
      <div class="todoapp">
        <section class="input-container"></section>
        <section class="main">
          <ul class="todo-list"></ul>
        </section>
        <div class="count-container">
          <span class="todo-count"></span>
          <ul class="filters">
            <li>
              <a href="#all" class="selected">전체보기</a>
            </li>
            <li>
              <a href="#priority">우선 순위</a>
            </li>
            <li>
              <a href="#active">해야할 일</a>
            </li>
            <li>
              <a href="#completed">완료한 일</a>
            </li>
          </ul>
          <button class="clear-completed">모두 삭제</button>
        </div>
      </div>
    `;
    return todoContainer;
  }
}
