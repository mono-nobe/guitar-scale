#! /usr/bin/env node

console.log("this is index.js");
const Scale = require("./scale/scale.js");
const MinorPentatonic = require("./scale/minorPentatonic");

async function test() {
  let scale = new Scale();
  scale.test();
  let minorPentatonic = new MinorPentatonic();
  minorPentatonic.penta();
  const result = await minorPentatonic.shiftScale(4);
  console.log("####### result ######");
  console.log(result);
}

// const { Select } = require("enquirer");

async function main() {
  // const keySelector = new Select({
  //   name: "key",
  //   message: "Pick a key",
  //   choices: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  // });

  // await keySelector
  //   .run()
  //   .then((answer) => console.log("Answer:", answer))
  //   .catch(console.error);

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

  console.log("---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-|---");
  console.log("---|-◎-|---|---|-●-|---|-●-|---|-●-|---|---|-●-|---");
  console.log("-●-|---|---|-●-|---|-◎-|---|---|-●-|---|-●-|---|-●-");
  console.log("---|-●-|---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---");
  console.log("---|-●-|---|-◎-|---|---|-●-|---|-●-|---|-●-|---|---");
  console.log("---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-|---");
  console.log("   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12");

  let firstString = "---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-".split(
    "|"
  );
  let secondString = "---|-◎-|---|---|-●-|---|-●-|---|-●-|---|---|-●-".split(
    "|"
  );
  let thirdString = "-●-|---|---|-●-|---|-◎-|---|---|-●-|---|-●-|---".split(
    "|"
  );
  let fourthString = "---|-●-|---|-●-|---|-●-|---|---|-●-|---|-◎-|---".split(
    "|"
  );
  let fifthString = "---|-●-|---|-◎-|---|---|-●-|---|-●-|---|-●-|---".split(
    "|"
  );
  let sixthString = "---|-●-|---|-●-|---|---|-●-|---|-◎-|---|---|-●-".split(
    "|"
  );

  console.log("this is firstString.join('|')");
  console.log(firstString.join("|"));
  // キーがC→Eの場合。４つ上がる
  console.log("##### first #####");
  console.log(firstString.length);
  console.log(firstString);
  let firstHalf = firstString.slice(-4);

  console.log("##### second #####");
  console.log(firstString);
  let secondHalf = firstString.slice(0, 12 - 4);

  console.log("this is firstHalf & secondHalf");
  console.log(firstHalf);
  console.log(secondHalf);

  console.log("firstHalf.join(|) + secondHalf.join(|)");
  console.log(firstHalf.join("|") + "|" + secondHalf.join("|"));
}

main();
test();
