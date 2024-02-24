export default class Button {
  constructor(app, { list, name }) {
    this.list = list;
    this.name = name;
    this.app = app;
    this.init();
  }

  init() {
    this.$view =
      this.name === "add"
        ? this.app.$view.find(".add-btn")
        : this.app.$view.find(".delete-btn");
    this.#listeners();
  }

  #listeners() {
    this.$view.click(() => {
      switch (this.name) {
        case "add":
          this.list.addItem();
          break;
        case "delete":
          this.list.deleteItem();
          break;
        default:
          break;
      }
    });
  }

  render() {}
}
