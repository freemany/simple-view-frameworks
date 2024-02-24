export default class Item {
  constructor(app, { list }) {
    this.app = app;
    this.list = list;
    this.init();
  }

  #getText() {
    return new Date().getTime();
  }

  init() {
    this.data = this.#getText();
    this.$view = $("<li>");
    this.listeners();
    this.render();
  }

  listeners() {
    this.$view.click(() => {
      this.data = this.#getText();
      this.render();
    });
  }

  render() {
    this.$view.text(this.data);
  }

  destroy() {
    this.$view.remove();
  }
}
