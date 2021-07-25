import Title from "./components/Title.js";
import Component from "./core/Component.js";
import Router from "./router/index.js";
import { $ } from "./utils/utils.js";

export default class App extends Component {
  render() {
    const titleView = new Title($("#user-title"));
    new Router({ titleView });
  }
}
