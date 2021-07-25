import api from "../../api/api.js";
import Component from "../../core/Component.js";
import { ALERT_MESSAGE } from "../../utils/constants.js";
import { $, Alert, checkClassList } from "../../utils/utils.js";
import TeamAddButton from "./TeamAddButton.js";
import TeamButton from "./TeamButton.js";

export default class TeamList extends Component {
  render() {
    this.$target.innerHTML = this.store.team
      .map(({ _id, name }) => {
        return TeamButton(_id, name);
      })
      .join("");
    this.$target.innerHTML += TeamAddButton();
  }

  bindEvents() {
    this.$target.addEventListener("click", (e) => this.onClickTeamList(e));
  }

  async onClickTeamList({ target }) {
    checkClassList(target, "add-team-button") && (await this.addTeam());

    checkClassList(target.closest(".team-card-container"), "team-card-container") && this.props.routeTo;
  }

  async addTeam() {
    const teamName = Alert.promtAlert(ALERT_MESSAGE.CREATE_TEAM);
    if (teamName && teamName.trim().length < 2) return;
    if (!teamName) return;
    const payload = {
      name: teamName,
    };
    const teamData = await api.postTeam(payload);
    this.store.addTeam(teamData);
    this.store.notifyObservers();
  }
}
