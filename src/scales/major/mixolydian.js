const Scale = require("../scale");

module.exports = class Mixolydian extends Scale {
  constructor() {
    super();
    this.fingerboards.push([
      "-●-",
      "-●-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-◎-",
      "---",
      "-●-",
      "---",
    ]);
    this.fingerboards.push([
      "---",
      "-◎-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
    ]);
    this.fingerboards.push([
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-◎-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
    ]);
    this.fingerboards.push([
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-◎-",
      "---",
    ]);
    this.fingerboards.push([
      "-●-",
      "-●-",
      "---",
      "-◎-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-●-",
      "---",
    ]);
    this.fingerboards.push([
      "-●-",
      "-●-",
      "---",
      "-●-",
      "---",
      "-●-",
      "-●-",
      "---",
      "-◎-",
      "---",
      "-●-",
      "---",
    ]);
  }
};
