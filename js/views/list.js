import Item from "./item.js";

export default class List {
  constructor(app) {
    this.app = app;
    this.init();
    this.items = [];
  }
  init() {
    this.$view = this.app.$view.find(".list");
  }

  addItem() {
    const newItem = new Item(this.app, this);
    this.items.push(newItem);
    this.$view.append(newItem.$view);
  }

  deleteItem() {
    if (!this.items.length) {
      return;
    }
    let lastItem = this.items.pop();
    lastItem.destroy();
    lastItem = null;
  }
}
