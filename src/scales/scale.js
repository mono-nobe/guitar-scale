module.exports = class Scale {
  constructor() {
    this.fingerboards = [];
  }

  shiftScale(interval) {
    return new Promise((resolve) => {
      if (interval === 0) {
        resolve(this.fingerboards);
      }

      resolve(
        this.fingerboards.map((fingerboardPoints) => {
          return fingerboardPoints
            .slice(fingerboardPoints.length - interval)
            .concat(
              fingerboardPoints.slice(0, fingerboardPoints.length - interval)
            );
        })
      );
    });
  }
};
