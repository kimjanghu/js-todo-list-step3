import TodoStore from "../../../store/Todo/index.js";
import TodoClearButton from "./TodoClearButton.js";
import TodoCount from "./TodoCount.js";
import TodoFilter from "./TodoFilter.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoTitle from "./TodoTitle.js";

import { $ } from "../../../utils/utils.js";

export default function TodoListView($target, todoList = { _id: "", name: "", todoList: [] }, teamId) {
  const { _id, name, todoList: todos } = todoList;
  const todoStore = new TodoStore(todos, name, _id);
  const todoTitleView = new TodoTitle($target, todoStore);

  const todoApp = document.createElement("div");
  todoApp.classList.add("todoapp");
  $target.appendChild(todoApp);

  new TodoInput(todoApp, todoStore, {
    teamId,
  });

  todoApp.innerHTML += `
    <section class="main">
      <ul class="todo-list" data-member-id=${_id}></ul>
    </section>
  `;
  const todoListView = new TodoList($(`.todo-list[data-member-id="${_id}"]`), todoStore);
  // const todoCountView = new TodoCount($(".todo-count", $target), todoStore);
  // const todoFilterView = new TodoFilter($(".filters", $target), todoStore);
  // new TodoClearButton($(".clear-completed", $target), todoStore);

  [(todoTitleView, todoListView)].forEach((component) => todoStore.subscribe(component));
}
