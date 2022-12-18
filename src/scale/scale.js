module.exports = class Scale {
  constructor() {
    this.fingerboards = [];
  }

  shiftScale(interval) {
    return new Promise((resolve) => {
      resolve(
        this.fingerboards.map((fingerboard) => {
          const fingerboardPoints = fingerboard.split("|");

          return (
            fingerboardPoints
              .slice(fingerboardPoints.length - interval)
              .join("|") +
            "|" +
            fingerboardPoints
              .slice(0, fingerboardPoints.length - interval)
              .join("|")
          );
        })
      );
    });
  }
};
