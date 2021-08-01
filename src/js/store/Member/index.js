import Subject from "../Subject.js";

export default class MemberStore extends Subject {
  constructor(teamTodoList, teamId, selectedTeamName) {
    super();
    this.teamTodoList = teamTodoList ?? [];
    this.teamId = teamId;
    this.selectedTeamName = selectedTeamName ?? "";
  }

  setNewTeamTodoList(newState) {
    this.teamTodoList = [...newState];
  }
}
