import Subject from "../Subject.js";

export default class teamStore extends Subject {
  constructor(team) {
    super();
    this.team = team ?? [];
  }

  addTeam(team) {
    this.team = [...this.team, team];
  }
}
