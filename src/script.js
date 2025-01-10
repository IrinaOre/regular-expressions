"use strict";
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (/\d{4,}/.test(this.name) || !/^[a-z]+?[\w-]+[a-z]$/i.test(this.name)) {
      return "Invalid username!";
    } else {
      return this.name;
    }
  }
}
