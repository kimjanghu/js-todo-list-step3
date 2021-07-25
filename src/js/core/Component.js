export default class Component {
  $target;
  store;
  props;

  constructor($target, store, props = null) {
    this.$target = $target;
    this.store = store;
    this.props = props;

    this.render();
    this.bindEvents();
  }

  render() {}
  bindEvents() {}
}
