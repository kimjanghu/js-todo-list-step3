import Component from "../../core/Component.js";
import TodoMemberAddButton from "./TodoAddMemberButton.js";
import TodoListView from "./TodoList/index.js";
import api from "../../api/api.js";

export default class TodoMemberList extends Component {
  render() {
    this.$target.innerHTML = "";
    const todoMemberList = this.store.teamTodoList
      .map((todoList) => TodoListView(this.createDOM(todoList), todoList, this.store.teamId))
      .join("");
    this.$target.innerHTML = todoMemberList;
    new TodoMemberAddButton(this.$target, null, {
      addTodoMember: this.addTodoMember.bind(this),
    });
  }

  async addTodoMember(name) {
    const { members } = await api.postTeamMember(this.store.teamId, { name });
    this.store.setNewTeamTodoList(members);
    this.store.notifyObservers();
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
