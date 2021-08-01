import Subject from "../Subject.js";

export default class teamStore extends Subject {
  constructor(todoList) {
    super();
    this.todoList = todoList ?? [];
  }
}
