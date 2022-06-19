const fs = require("fs");

const fdata = fs.readFileSync("./test.txt", { encoding: "utf8", flag: "r" });

const res = fdata.split(/\n|\r|\s+|\s+/g).reduce((acc, curr) => {
  acc[curr] = curr in acc ? acc[curr] + 1 : 0;
  return acc;
}, {});

let HighestRepeatedWord = Object.keys(res)
  ?.sort((a, b) => (res[a] > res[b] ? -1 : 1))
  .reduce((acc, curr) => {
    return acc.length > 0
      ? res[acc[0]] < res[curr]
        ? [...acc, curr]
        : acc
      : [...acc, curr];
  }, [])
  .map((key) => ({ [key]: res[key] }));

console.log(HighestRepeatedWord);
