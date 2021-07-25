import Subject from "../Subject.js";

export default class TodoStore extends Subject {
  constructor(todoList, selectedTeamName) {
    super();
    this.todoList = todoList ?? [];
    this.selectedTeamName = selectedTeamName ?? "";
  }
}
