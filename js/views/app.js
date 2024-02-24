import List from "./list.js";
import Button from "./button.js";

export default class AppView {
  constructor() {
    this.init();
  }

  init() {
    this.$view = $("#app");
    this.list = new List(this);
    this.addBtn = new Button(this, { name: "add", list: this.list });
    this.deleteBtn = new Button(this, { name: "delete", list: this.list });
  }

  render() {}
}
