import api from "../../api/api.js";
import Component from "../../core/Component.js";
import { ALERT_MESSAGE } from "../../utils/constants.js";
import { $, Alert } from "../../utils/utils.js";

export default class TodoMemberAddButton extends Component {
  render() {
    this.$target.innerHTML += `
      <li class="add-user-button-container">
        <button id="add-user-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
      </li>
    `;
  }

  bindEvents() {
    $("#add-user-button", this.target).addEventListener("click", (e) => this.onClickAddTodoMember(e));
  }

  onClickAddTodoMember() {
    const memberName = Alert.promtAlert(ALERT_MESSAGE.CREATE);
    memberName && this.props.addTodoMember(memberName);
  }
}
