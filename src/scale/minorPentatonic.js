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
};
