import TodoClearButton from "./TodoClearButton.js";
import TodoCount from "./TodoCount.js";
import TodoFilter from "./TodoFilter.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoTitle from "./TodoTitle.js";

export default function TodoListView(todoList = {}) {
  console.log(todoList);
  new TodoTitle();
  new TodoInput();
  new TodoList();
  new TodoCount();
  new TodoFilter();
  new TodoClearButton();
}
