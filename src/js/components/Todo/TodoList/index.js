import TodoStore from "../../../store/Todo/index.js";
import TodoClearButton from "./TodoClearButton.js";
import TodoCount from "./TodoCount.js";
import TodoFilter from "./TodoFilter.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoTitle from "./TodoTitle.js";

import { $ } from "../../../utils/utils.js";

export default function TodoListView(todoList = { _id: "", name: "", todoList: [] }) {
  const { _id, name, todos } = todoList;
  const todoStore = new TodoStore(todos, name, _id);
  console.log(todoList);
  const todoTitleView = new TodoTitle($("#member-title"), todoStore);
  new TodoInput($(".input-container"), todoStore);
  const todoListView = new TodoList($(".todo-list"), todoStore);
  const todoCountView = new TodoCount($(".todo-count"), todoStore);
  const todoFilterView = new TodoFilter($(".filters"), todoStore);
  new TodoClearButton($(".clear-completed"), todoStore);

  [todoTitleView, todoListView, todoCountView, todoFilterView].forEach((component) => todoStore.subscribe(component));
}
