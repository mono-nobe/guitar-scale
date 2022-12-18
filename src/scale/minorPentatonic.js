const Scale = require("./scale");

module.exports = class MinorPentatonic extends Scale {
  constructor() {
    super();
    this.fingerboards.push("---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-");
    this.fingerboards.push("---|-◎-|---|---|-●-|---|-●-|---|-●-|---|---|-●-");
    this.fingerboards.push("-●-|---|---|-●-|---|-◎-|---|---|-●-|---|-●-|---");
    this.fingerboards.push("---|-●-|---|-●-|---|-●-|---|---|-●-|---|-◎-|---");
    this.fingerboards.push("---|-●-|---|-◎-|---|---|-●-|---|-●-|---|-●-|---");
    this.fingerboards.push("---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-");
  }

  penta() {
    console.log("### penta ###");
    console.log(this.scale);
  }
};
