import Component from "../core/Component.js";
import Team from "../components/Team/index.js";
import Title from "../components/Title.js";
import { PATH_NAME } from "../utils/constants.js";
import { $ } from "../utils/utils.js";
import Todo from "../components/Todo/index.js";

export default class Router {
  constructor(props) {
    this.props = props;
    this.render();
  }

  render() {
    const { MAIN_PATH, KANBAN_PATH } = PATH_NAME;
    const pathName = window.location.pathname;
    const url = window.location.href;
    if (pathName === MAIN_PATH) {
      this.props.titleView.setTitle("Team");
      Team({ routeTo: this.routeTo.bind(this) });
    }

    if (pathName === KANBAN_PATH) {
      Todo({ titleView: this.props.titleView });
    }
  }

  routeTo() {
    this.render();
  }
}
