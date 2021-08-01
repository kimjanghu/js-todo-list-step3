import api from "../../api/api.js";
import MemberStore from "../../store/Member/index.js";
import TodoMemberList from "./TodoMemberList.js";
import { $ } from "../../utils/utils.js";
import TodoMemberAddButton from "./TodoAddMemberButton.js";

export default async function Todo(props) {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const { _id, name, members } = await api.getTeam(id);
  const memberStore = new MemberStore(members, _id, name);

  const todoMemberListView = new TodoMemberList($(".todoapp-list-container"), memberStore);
  const todoAddMemberButtonView = new TodoMemberAddButton($(".add-user-button-container"), memberStore);

  [todoMemberListView].forEach((component) => memberStore.subscribe(component));

  const setTitleView = (name) => {
    props.titleView.setTitle(name);
    props.titleView.render();
  };
  setTitleView(name);
}
