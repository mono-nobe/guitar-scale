#! /usr/bin/env node

const { Select, prompt } = require("enquirer");

const requireDirectory = require("require-directory");
const scalesDir = requireDirectory(module, "./scales");

const keys = [
  {
    name: "C",
    interval: 0,
  },
  {
    name: "C#",
    interval: 1,
  },
  {
    name: "D",
    interval: 2,
  },
  {
    name: "D#",
    interval: 3,
  },
  {
    name: "E",
    interval: 4,
  },
  {
    name: "F",
    interval: 5,
  },
  {
    name: "F#",
    interval: 6,
  },
  {
    name: "G",
    interval: 7,
  },
  {
    name: "G#",
    interval: 8,
  },
  {
    name: "A",
    interval: 9,
  },
  {
    name: "A#",
    interval: 10,
  },
  {
    name: "B",
    interval: 11,
  },
];
const tone = ["major", "minor"];
const majorScales = [
  "lydian",
  "major",
  "major blues",
  "major pentatonic",
  "mixolydian",
];
const minorScales = [
  "harmonic minor",
  "melodic minor",
  "minor",
  "minor blues",
  "minor pentatonic",
];
const fretNum = ["12", "24"];

async function main() {
  console.log("This helps you memorize guitar scales!!!\n");

  const selectedKey = await selectKey();
  const selectedTone = await selectTone();
  const selectedScale = await selectScale(selectedTone);
  const fingerboards = await calcFingerboards(
    selectedScale,
    selectedKey.interval
  );
  const selectedFretNum = await selectFretNum();

  console.log("\nEnjoy your practice!!!!!\n");
  await fingerboards.forEach((fingerboard) => {
    if (selectedFretNum === "24") {
      fingerboard = fingerboard.concat(fingerboard);
    }
    fingerboard.push(fingerboard[0]);
    console.log(fingerboard.join("|"));
  });

  if (selectedFretNum === "24") {
    console.log(
      "   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24"
    );
  } else {
    console.log("   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12");
  }
}

async function selectKey() {
  const selectedKey = await prompt({
    type: "select",
    name: "interval",
    message: "Pick a key",
    choices: keys,
    result() {
      return this.focused.interval;
    },
  });

  if (selectedKey.interval === "") {
    selectedKey.interval = 0;
  }

  return selectedKey;
}

async function selectTone() {
  const toneSelector = new Select({
    name: "tone",
    message: "Pick a tone",
    choices: tone,
  });

  return await toneSelector
    .run()
    .then((answer) => {
      return answer;
    })
    .catch(console.error);
}

async function selectScale(selectedTone) {
  const scaleSelector = new Select({
    name: "scale",
    message: "Pick a scale",
    choices: selectedTone === "major" ? majorScales : minorScales,
  });

  return await scaleSelector
    .run()
    .then((answer) => {
      return answer;
    })
    .catch(console.error);
}

async function selectFretNum() {
  const fretNumSelector = new Select({
    name: "fretNum",
    message: "Pick a number of frets",
    choices: fretNum,
  });

  return await fretNumSelector
    .run()
    .then((answer) => {
      return answer;
    })
    .catch(console.error);
}

async function calcFingerboards(selectedScale, selectedInterval) {
  let scale;
  switch (selectedScale) {
    case "lydian":
      scale = new scalesDir.major.lydian();
      break;
    case "major":
      scale = new scalesDir.major.major();
      break;
    case "major blues":
      scale = new scalesDir.major.majorBlues();
      break;
    case "major pentatonic":
      scale = new scalesDir.major.majorPentatonic();
      break;
    case "mixolydian":
      scale = new scalesDir.major.mixolydian();
      break;
    case "harmonic minor":
      scale = new scalesDir.minor.harmonicMinor();
      break;
    case "melodic minor":
      scale = new scalesDir.minor.melodicMinor();
      break;
    case "minor":
      scale = new scalesDir.minor.minor();
      break;
    case "minor blues":
      scale = new scalesDir.minor.minorBlues();
      break;
    case "minor pentatonic":
      scale = new scalesDir.minor.minorPentatonic();
      break;
    default:
      console.error(`this scale is undefined. scale: ${scale}`);
  }

  return await scale.shiftScale(selectedInterval);
}

main();
