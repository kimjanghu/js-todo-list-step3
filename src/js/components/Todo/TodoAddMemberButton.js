import api from "../../api/api.js";
import Component from "../../core/Component.js";
import { ALERT_MESSAGE } from "../../utils/constants.js";
import { $, Alert } from "../../utils/utils.js";

export default class TodoMemberAddButton extends Component {
  render() {
    this.$target.innerHTML = `
      <button id="add-user-button" class="ripple">
        <span class="material-icons">add</span>
      </button>
    `;
  }

  bindEvents() {
    $("#add-user-button", this.target).addEventListener("click", (e) => this.onClickAddTodoMember(e));
  }

  onClickAddTodoMember() {
    const memberName = Alert.promtAlert(ALERT_MESSAGE.CREATE);
    memberName && this.addTodoMember(memberName);
  }

  async addTodoMember(name) {
    const { members } = await api.postTeamMember(this.store.teamId, { name });
    this.store.setNewTeamTodoList(members);
    this.store.notifyObservers();
  }
}
