import Core from "./Core.js";

const API_BASE_URL = "https://js-todo-list-9ca3a.df.r.appspot.com/api";

const URL = Object.freeze({
  TEAM: `${API_BASE_URL}/teams`,
  MEMBER: "/members",
});

class Api {
  constructor() {
    this.api = new Core();
  }

  async postTeam(payload) {
    const body = JSON.stringify(payload);
    return await this.api.post(`${URL.TEAM}`, { body });
  }

  async getTeam(teamId) {
    return await this.api.get(`${URL.TEAM}/${teamId}`);
  }

  async getTeamList() {
    return await this.api.get(`${URL.TEAM}`);
  }

  async deleteTeam(teamId) {
    return await this.api.delete(`${URL.TEAM}/${teamId}`);
  }

  async postTeamMember(teamId, payload) {
    const body = JSON.stringify(payload);
    return await this.api.post(`${URL.TEAM}/${teamId}${URL.MEMBER}`, { body });
  }
}

const api = new Api();
export default api;
