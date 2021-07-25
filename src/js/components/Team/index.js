import api from "../../api/api.js";
import TeamStore from "../../store/Team/index.js";
import { $ } from "../../utils/utils.js";
import TeamList from "./TeamList.js";

export default async function Team() {
  const initialTeamData = await api.getTeamList();
  console.log(initialTeamData);
  const teamStore = new TeamStore(initialTeamData);
  const teamList = new TeamList($(".team-list-container"), teamStore);
  teamStore.subscribe(teamList);
}
