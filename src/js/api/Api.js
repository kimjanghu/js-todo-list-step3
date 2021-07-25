import Core from "./Core";

const API_BASE_URL = "https://js-todo-list-9ca3a.df.r.appspot.com/api";

const URL = Object.freeze({
  TEAM: `${API_BASE_URL}/teams`,
});

export default class Api {
  constructor() {
    this.api = new Core();
  }

  async postTeam(payload) {
    return this.api.post(`${URL.TEAM}`, payload);
  }

  async getTeam(teamId) {
    return this.api.get(`${URL.TEAM}/${teamId}`);
  }

  async getTeamList() {
    return this.api.get(`${URL.TEAM}`);
  }

  async deleteTeam(teamId) {
    return this.api.get(`${URL.TEAM}/${teamId}`);
  }
}
