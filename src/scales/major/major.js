const Scale = require("../scale");

module.exports = class Major extends Scale {
  testMajor() {
    console.log("this is test major!!!!");
    console.log(this.scale);
  }
};
