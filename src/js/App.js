import Team from "./components/Team/index.js";
import Title from "./components/Title.js";
import Component from "./core/Component.js";
import { PATH_NAME } from "./utils/constants.js";
import { $ } from "./utils/utils.js";

export default class App extends Component {
  render() {
    const title = new Title($("#user-title"));
    const { MAIN_PATH } = PATH_NAME;
    if (window.location.pathname === MAIN_PATH) {
      Team();
    }
  }
}
