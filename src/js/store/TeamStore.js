import { todoDispatcher } from '../dispatcher/TodoDispatcher.js';
import { ACTION_TYPES } from '../action/Action.js';
import { DAO } from '../database/database.js';

const _getTeams = async () => {
  return await DAO.getTeams();
};

const _addTeam = async (teamName) => {
  return await DAO.addTeam(teamName);
};

const _copyState = (teamStoreState) => {
  const copy = {
    teams: [...teamStoreState.teams],
  };
  return copy;
};
const _state = {};
export class TeamStore {
  constructor(teamApp) {
    this.teamApp = teamApp;
    this.dispatcherIndex = todoDispatcher.register(this.setState, this);
  }
  async init() {
    _state.teams = await _getTeams();
    const copiedState = _copyState(_state);
    this.teamApp.renderAll(copiedState);
  }
  async setState({ action }) {
    if (Object.keys(_state).length == 0) {
      new Error("Invalid state. May be the store isn't initiated");
    }
    const type = action?.type;
    if (!type) {
      new Error('Invalid Action.');
    }
    //상태 변경
    switch (type) {
      case ACTION_TYPES.GET_TEAMS:
        _state.teams = await _getTeams();
        break;
      case ACTION_TYPES.ADD_TEAM:
        await _addTeam(action?.teamName);
        _state.teams = await _getTeams();
        break;
      default:
        return true;
    }

    //상태 복사 후 전파
    const copiedState = _copyState(_state);
    this.teamApp.renderAll(copiedState);

    //dispatcher에서 resolve처리
    return true;
  }
}