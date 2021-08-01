import Subject from "../Subject.js";

export default class TodoStore extends Subject {
  constructor(todoList, memberName, todoId) {
    super();
    this.todoList = todoList ?? [];
    this.memberName = memberName ?? "";
    this.todoId = todoId ?? "";
  }
}
