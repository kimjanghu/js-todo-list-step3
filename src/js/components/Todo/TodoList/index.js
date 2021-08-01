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
  console.log(todoList);
  const todoTitleView = new TodoTitle($(".member-title", $target), todoStore);
  new TodoInput($(".input-container", $target), todoStore, {
    teamId,
  });
  const todoListView = new TodoList(
    $(".todo-list", $target, {
      teamId,
    }),
    todoStore,
  );
  const todoCountView = new TodoCount($(".todo-count", $target), todoStore);
  const todoFilterView = new TodoFilter($(".filters", $target), todoStore);
  new TodoClearButton($(".clear-completed", $target), todoStore);

  [todoTitleView, todoListView, todoCountView, todoFilterView].forEach((component) => todoStore.subscribe(component));
  return $target.outerHTML;
}
