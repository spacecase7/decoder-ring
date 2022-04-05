// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const lib1 = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const lib2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    console.log(lib1.length);
    console.log(lib2.length);

    if (encode) {
      let result = "";
      let message = input.toLowerCase();
      for (let text = 0; text < message.length; text++) {
        let letter = message[text];
        console.log(`letter is ${letter}`);
        if (letter.match(/[a-z]/)) {
          if (letter === "i" || letter === "j") {
            result += "42";
          } else {
            let num = lib2.indexOf(letter);
            result += lib1[num];
          }
        } else {
          result += letter;
        }
      }
      return result;
    } else {
      let messageArr = input.split(" ");
      console.log(messageArr);
      let lettersArr = [];
      for (word of messageArr) {
        lettersArr.push(word.match(/.{2}/g));
      }
      let isEven = messageArr.every((word) => word.length % 2 === 0);
      if (!isEven) {
        return false;
      }
      let finalArr = [];
      for (word of lettersArr) {
        let tempArr = [];
        for (letter of word) {
          if (letter === "42") {
            tempArr.push("(i/j)");
          } else {
            let num = lib1.indexOf(letter);
            let something = lib2[num];
            tempArr.push(something);
          }
        }
        finalArr.push(tempArr);
      }
      let decodedArr = [];
      for (word of finalArr) {
        let val = word.join("");
        decodedArr.push(val);
      }
      console.log(decodedArr);
      let final = decodedArr.join(" ");
      return final;
    }
  }
  polybius("jiggle", true);

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
