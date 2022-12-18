#! /usr/bin/env node

const { Select, prompt } = require("enquirer");
const MinorPentatonic = require("./scale/minorPentatonic");

async function main() {
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

  const selectedKey = await prompt({
    type: "select",
    name: "interval",
    message: "Pick a key",
    choices: keys,
    result() {
      return this.focused.interval;
    },
  });

  // const toneSelector = new Select({
  //   name: "tone",
  //   message: "Pick a tone",
  //   choices: ["major", "minor"],
  // });

  // let selectedTone;
  // await toneSelector
  //   .run()
  //   .then((answer) => {
  //     console.log("Answer:", answer);
  //     selectedTone = answer;
  //   })
  //   .catch(console.error);

  // if (selectedTone === "major") {
  //   const majorScaleSelector = new Select({
  //     name: "scale",
  //     message: "Pick a major scale",
  //     choices: ["standard", "pentatonic"],
  //   });

  //   await majorScaleSelector
  //     .run()
  //     .then((answer) => console.log("Answer:", answer))
  //     .catch(console.error);
  // } else {
  //   const minorScaleSelector = new Select({
  //     name: "scale",
  //     message: "Pick a minor scale",
  //     choices: ["standard", "pentatonic"],
  //   });

  //   await minorScaleSelector
  //     .run()
  //     .then((answer) => console.log("Answer:", answer))
  //     .catch(console.error);
  // }

  const fingerboards = await calcFingerboards(selectedKey.interval);
  console.log("###############");
  console.log(fingerboards);

  // fingerboards.forEach((fingerboard) => {});

  console.log("---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-|---");
  console.log("---|-◎-|---|---|-●-|---|-●-|---|-●-|---|---|-●-|---");
  console.log("-●-|---|---|-●-|---|-◎-|---|---|-●-|---|-●-|---|-●-");
  console.log("---|-●-|---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---");
  console.log("---|-●-|---|-◎-|---|---|-●-|---|-●-|---|-●-|---|---");
  console.log("---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-|---");
  console.log("   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12");
}

async function calcFingerboards(selectedInterval) {
  let minorPentatonic = new MinorPentatonic();
  return await minorPentatonic.shiftScale(selectedInterval);
}

main();
