export default class Title {
  constructor($target, title) {
    this.$target = $target;
    this.title = title ?? "Team";
    this.render();
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  render() {
    this.$target.innerHTML = `
      <span><strong>${this.title}</strong>'s Todo Lists</span>
    `;
  }
}
