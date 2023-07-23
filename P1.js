// Version: 1.0
let exellent = document.getElementById("exellent");
exellent.style.display = "none";
let tryAgain = document.getElementById("tryAgain");
tryAgain.style.display = "none";
let correctAnswers = document.getElementById("correctAnswers");
let questionNum = document.getElementsByClassName("questionNum");
let Row = document.getElementById("Row");
const questionG2 = document.getElementById("questionG2");
let Game1Times1 = document.getElementById("Game1Times1");
let Game1Times2 = document.getElementById("Game1Times2");
let Game1Times3 = document.getElementById("Game1Times3");
let Game1Times4 = document.getElementById("Game1Times4");
let Game1Times5 = document.getElementById("Game1Times5");
let Game1Times6 = document.getElementById("Game1Times6");
let Game1Times7 = document.getElementById("Game1Times7");
let Game1Times8 = document.getElementById("Game1Times8");
let Game1Times9 = document.getElementById("Game1Times9");
let Game1Times10 = document.getElementById("Game1Times10");
const Game2Times1 = document.getElementById("Game2Times1");
const Game2Times2 = document.getElementById("Game2Times2");
const Game2Times3 = document.getElementById("Game2Times3");
const Game2Times4 = document.getElementById("Game2Times4");
const Game2Times5 = document.getElementById("Game2Times5");
const Game2Times6 = document.getElementById("Game2Times6");
const Game2Times7 = document.getElementById("Game2Times7");
const Game2Times8 = document.getElementById("Game2Times8");
const Game2Times9 = document.getElementById("Game2Times9");
const Game2Times10 = document.getElementById("Game2Times10");
let GamesHideShow = () => {
  if (rtn === 10) {
    Game1Times1.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 2";
      Game1Times2.hidden = false;
    }, 1500);
  } else if (rtn === 20) {
    Game1Times2.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 3";
      Game1Times3.hidden = false;
    }, 1500);
  } else if (rtn === 30) {
    Game1Times3.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 4";
      Game1Times4.hidden = false;
    }, 1500);
  } else if (rtn === 40) {
    Game1Times4.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 5";
      Game1Times5.hidden = false;
    }, 1500);
  } else if (rtn === 50) {
    Game1Times5.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 6";
      Game1Times6.hidden = false;
    }, 1500);
  } else if (rtn === 60) {
    Game1Times6.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 7";
      Game1Times7.hidden = false;
    }, 1500);
  } else if (rtn === 70) {
    Game1Times7.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 8";
      Game1Times8.hidden = false;
    }, 1500);
  } else if (rtn === 80) {
    Game1Times8.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 9";
      Game1Times9.hidden = false;
    }, 1500);
  } else if (rtn === 90) {
    Game1Times9.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 10";
      Game1Times10.hidden = false;
    }, 1500);
  } else if (rtn === 100) {
    Game1Times10.hidden = true;
    exellent.style.display = "block";
    setTimeout(() => {
      exellent.style.display = "none";
      Row.innerText = "כפולות 1";
      Game2Times1.hidden = false;
    }, 1500);
  }
};

let num1 = 1;
let num2 = 1;
let num3 = 1;
let num4 = 1;
let rtn = 0;

for (let i = 0; i < questionNum.length; i++) {
  Game1Times1.hidden = true;
  let answer = document.querySelectorAll(`#answer${num3}_${num4}`);
  num4++;
  if (num4 > 10) {
    num3++;
    num4 = 1;
  }

  let i1 = num1 * num2;
  for (let index = 0; index < answer.length; index++) {
    answer[index].style.fontSize = "20px";
    answer[index].style.fontWeight = "bold";
    answer[index].addEventListener("change", () => {
      if (answer[index].value == i1) {
        answer[index].style.backgroundColor = "green";
        rtn++;
        console.log(rtn);
      } else {
        answer[index].style.backgroundColor = "red";
      }
      if (answer[index].value === "") {
        answer[index].style.backgroundColor = "white";
        answer[index].style.color = "black";
      }
      GamesHideShow();
    });
  }
  num2++;
  if (num2 > 10) {
    num1++;
    num2 = 1;
  }
}
//Game2
// Game2Times1.hidden = false;
let mathArr1 = [
  { question: "0x1", result: 0 },
  { question: "1x1", result: 1 },
  { question: "2x1", result: 2 },
  { question: "3x1", result: 3 },
  { question: "4x1", result: 4 },
  { question: "5x1", result: 5 },
  { question: "6x1", result: 6 },
  { question: "7x1", result: 7 },
  { question: "8x1", result: 8 },
  { question: "9x1", result: 9 },
  { question: "10x1", result: 10 },
];
let mathArrNum1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mathArr2 = [
  { question: "0x2", result: 0 },
  { question: "1x2", result: 2 },
  { question: "2x2", result: 4 },
  { question: "3x2", result: 6 },
  { question: "4x2", result: 8 },
  { question: "5x2", result: 10 },
  { question: "6x2", result: 12 },
  { question: "7x2", result: 14 },
  { question: "8x2", result: 16 },
  { question: "9x2", result: 18 },
  { question: "10x2", result: 20 },
];
let mathArrNum2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let mathArr3 = [
  { question: "0x3", result: 0 },
  { question: "1x3", result: 3 },
  { question: "2x3", result: 6 },
  { question: "3x3", result: 9 },
  { question: "4x3", result: 12 },
  { question: "5x3", result: 15 },
  { question: "6x3", result: 18 },
  { question: "7x3", result: 21 },
  { question: "8x3", result: 24 },
  { question: "9x3", result: 27 },
  { question: "10x3", result: 30 },
];
let mathArrNum3 = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
let mathArr4 = [
  { question: "0x4", result: 0 },
  { question: "1x4", result: 4 },
  { question: "2x4", result: 8 },
  { question: "3x4", result: 12 },
  { question: "4x4", result: 16 },
  { question: "5x4", result: 20 },
  { question: "6x4", result: 24 },
  { question: "7x4", result: 28 },
  { question: "8x4", result: 32 },
  { question: "9x4", result: 36 },
  { question: "10x4", result: 40 },
];
let mathArrNum4 = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
let mathArr5 = [
  { question: "0x5", result: 0 },
  { question: "1x5", result: 5 },
  { question: "2x5", result: 10 },
  { question: "3x5", result: 15 },
  { question: "4x5", result: 20 },
  { question: "5x5", result: 25 },
  { question: "6x5", result: 30 },
  { question: "7x5", result: 35 },
  { question: "8x5", result: 40 },
  { question: "9x5", result: 45 },
  { question: "10x5", result: 50 },
];
let mathArrNum5 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let mathArr6 = [
  { question: "0x6", result: 0 },
  { question: "1x6", result: 6 },
  { question: "2x6", result: 12 },
  { question: "3x6", result: 18 },
  { question: "4x6", result: 24 },
  { question: "5x6", result: 30 },
  { question: "6x6", result: 36 },
  { question: "7x6", result: 42 },
  { question: "8x6", result: 48 },
  { question: "9x6", result: 54 },
  { question: "10x6", result: 60 },
];
let mathArrNum6 = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
let mathArr7 = [
  { question: "0x7", result: 0 },
  { question: "1x7", result: 7 },
  { question: "2x7", result: 14 },
  { question: "3x7", result: 21 },
  { question: "4x7", result: 28 },
  { question: "5x7", result: 35 },
  { question: "6x7", result: 42 },
  { question: "7x7", result: 49 },
  { question: "8x7", result: 56 },
  { question: "9x7", result: 63 },
  { question: "10x7", result: 70 },
];
let mathArrNum7 = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
let mathArr8 = [
  { question: "0x8", result: 0 },
  { question: "1x8", result: 8 },
  { question: "2x8", result: 16 },
  { question: "3x8", result: 24 },
  { question: "4x8", result: 32 },
  { question: "5x8", result: 40 },
  { question: "6x8", result: 48 },
  { question: "7x8", result: 56 },
  { question: "8x8", result: 64 },
  { question: "9x8", result: 72 },
  { question: "10x8", result: 80 },
];
let mathArrNum8 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
  let mathArr9 = [
  { question: "0x9", result: 0 },
  { question: "1x9", result: 9 },
  { question: "2x9", result: 18 },
  { question: "3x9", result: 27 },
  { question: "4x9", result: 36 },
  { question: "5x9", result: 45 },
  { question: "6x9", result: 54 },
  { question: "7x9", result: 63 },
  { question: "8x9", result: 72 },
  { question: "9x9", result: 81 },
  { question: "10x9", result: 90 },
];
let mathArrNum9 = [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90];
let mathArr10 = [
  { question: "0x10", result: 0 },
  { question: "1x10", result: 10 },
  { question: "2x10", result: 20 },
  { question: "3x10", result: 30 },
  { question: "4x10", result: 40 },
  { question: "5x10", result: 50 },
  { question: "6x10", result: 60 },
  { question: "7x10", result: 70 },
  { question: "8x10", result: 80 },
  { question: "9x10", result: 90 },
  { question: "10x10", result: 100 },
];
let mathArrNum10 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
Game2Times1.hidden = false;

function Game2HideShow() {
  if (rtnG2T1 === 10) {
    Game2Times2.hidden = false;
    Row.innerText = "כפולות 2";
    Game2Times1.hidden = true;
  }
}
// let countG2 = 0;
let rtnG2T1 = 0;
function randomFromArrT1() {
  let randomObject = mathArr1[Math.floor(Math.random() * mathArr1.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}

function getRandomT1() {
  let ranNums = mathArrNum1[Math.floor(Math.random() * mathArrNum1.length)];
  return ranNums;
}
let correctAnswerT1 = randomFromArrT1();
let randomDataHT1 = document.getElementsByClassName("randomDataHT1");
for (let index1 = 0; index1 < randomDataHT1.length; index1++) {
  randomFromArrT1();
  let userAnswerT1;
  setInterval(() => {
    randomDataHT1[index1].textContent = getRandomT1();
    userAnswerT1 = Number(randomDataHT1[index1].textContent);
  }, 5000);
  randomDataHT1[index1].addEventListener("click", () => {
    if (userAnswerT1 === correctAnswerT1) {
      Game2Times1.hidden = true;
      exellent.style.display = "block";
      rtnG2T1++;
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T1}`;
      console.log("r", rtnG2T1);
      console.log("u", userAnswerT1);
      console.log("c", correctAnswerT1);

      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times1.hidden = false;
        correctAnswerT1 = randomFromArrT1();
      }, 1500);
    } else {
      Game2Times1.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times1.hidden = false;
        correctAnswerT1 = randomFromArrT1();
      }, 1500);
    }
    if (rtnG2T1 === 10) {
      correctAnswers.textContent = ``;
      // Game2Times1.hidden = true;
      Game2Times1.style.display = "none";
      Game2Times2.hidden = false;
      Row.innerText = "כפולות 2";
    }
  });
}

function Game3HideShow() {
  if (rtnG2T2 === 10) {
    Game2Times3.hidden = false;
    Row.innerText = "כפולות 3";
    Game2Times2.hidden = true;
  }
}

let rtnG2T2 = 0;
function randomFromArrT2() {
  let randomObject = mathArr2[Math.floor(Math.random() * mathArr2.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT2() {
  let ranNums = mathArrNum2[Math.floor(Math.random() * mathArrNum2.length)];
  return ranNums;
}
let correctAnswerT2 = randomFromArrT2();
let randomDataHT2 = document.getElementsByClassName("randomDataHT2");
for (let index = 0; index < randomDataHT2.length; index++) {
  randomFromArrT2();
  let userAnswerT2;
  setInterval(() => {
    randomDataHT2[index].textContent = getRandomT2();
    userAnswerT2 = Number(randomDataHT2[index].textContent);
  }, 5000);
  randomDataHT2[index].addEventListener("click", () => {
    if (userAnswerT2 === correctAnswerT2) {
      Game2Times2.hidden = true;
      exellent.style.display = "block";
      rtnG2T2++;
      console.log("r", rtnG2T2);
      console.log("u", userAnswerT2);
      console.log("c", correctAnswerT2);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T2}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times2.hidden = false;
        correctAnswerT2 = randomFromArrT2();
      }, 1500);
    } else {
      Game2Times2.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times2.hidden = false;
        correctAnswerT2 = randomFromArrT2();
      }, 1500);
    }
    if (rtnG2T2 === 10) {
      correctAnswers.textContent = ``;
      Game2Times3.hidden = false;
      Row.innerText = "כפולות 3";
      Game2Times2.style.display = "none";
    }
  });
}

let rtnG2T3 = 0;
function randomFromArrT3() {
  let randomObject = mathArr3[Math.floor(Math.random() * mathArr3.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT3() {
  let ranNums = mathArrNum3[Math.floor(Math.random() * mathArrNum3.length)];
  return ranNums;
}
let correctAnswerT3 = randomFromArrT3();
let randomDataHT3 = document.getElementsByClassName("randomDataHT3");
for (let index = 0; index < randomDataHT3.length; index++) {
  randomFromArrT3();
  let userAnswerT3;
  setInterval(() => {
    randomDataHT3[index].textContent = getRandomT3();
    userAnswerT3 = Number(randomDataHT3[index].textContent);
  }, 5000);
  randomDataHT3[index].addEventListener("click", () => {
    if (userAnswerT3 === correctAnswerT3) {
      Game2Times3.hidden = true;
      exellent.style.display = "block";
      rtnG2T3++;
      console.log("r", rtnG2T3);
      console.log("u", userAnswerT3);
      console.log("c", correctAnswerT3);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T3}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times3.hidden = false;
        correctAnswerT3 = randomFromArrT3();
      }, 1500);
    } else {
      Game2Times3.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times3.hidden = false;
        correctAnswerT3 = randomFromArrT3();
      }, 1500);
    }
    if (rtnG2T3 === 10) {
      correctAnswers.textContent = ``;
      Game2Times4.hidden = false;
      Row.innerText = "כפולות 4";
      Game2Times3.style.display = "none";
    }
  });
}

let rtnG2T4 = 0;
function randomFromArrT4() {
  let randomObject = mathArr4[Math.floor(Math.random() * mathArr4.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT4() {
  let ranNums = mathArrNum4[Math.floor(Math.random() * mathArrNum4.length)];
  return ranNums;
}
let correctAnswerT4 = randomFromArrT4();
let randomDataHT4 = document.getElementsByClassName("randomDataHT4");
for (let index = 0; index < randomDataHT4.length; index++) {
  randomFromArrT4();
  let userAnswerT4;
  setInterval(() => {
    randomDataHT4[index].textContent = getRandomT4();
    userAnswerT4 = Number(randomDataHT4[index].textContent);
  }, 5000);
  randomDataHT4[index].addEventListener("click", () => {
    if (userAnswerT4 === correctAnswerT4) {
      Game2Times4.hidden = true;
      exellent.style.display = "block";
      rtnG2T4++;
      console.log("r", rtnG2T4);
      console.log("u", userAnswerT4);
      console.log("c", correctAnswerT4);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T4}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times4.hidden = false;
        correctAnswerT4 = randomFromArrT4();
      }, 1500);
    } else {
      Game2Times4.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times4.hidden = false;
        correctAnswerT4 = randomFromArrT4();
      }, 1500);
    }
    if (rtnG2T4 === 10) {
      correctAnswers.textContent = ``;
      Game2Times5.hidden = false;
      Row.innerText = "כפולות 5";
      Game2Times4.style.display = "none";
    }
  });
}

let rtnG2T5 = 0;
function randomFromArrT5() {
  let randomObject = mathArr5[Math.floor(Math.random() * mathArr5.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT5() {
  let ranNums = mathArrNum5[Math.floor(Math.random() * mathArrNum5.length)];
  return ranNums;
}
let correctAnswerT5 = randomFromArrT5();
let randomDataHT5 = document.getElementsByClassName("randomDataHT5");
for (let index = 0; index < randomDataHT5.length; index++) {
  randomFromArrT5();
  let userAnswerT5;
  setInterval(() => {
    randomDataHT5[index].textContent = getRandomT5();
    userAnswerT5 = Number(randomDataHT5[index].textContent);
  }, 5000);
  randomDataHT5[index].addEventListener("click", () => {
    if (userAnswerT5 === correctAnswerT5) {
      Game2Times5.hidden = true;
      exellent.style.display = "block";
      rtnG2T5++;
      console.log("r", rtnG2T5);
      console.log("u", userAnswerT5);
      console.log("c", correctAnswerT5);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T5}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times5.hidden = false;
        correctAnswerT5 = randomFromArrT5();
      }, 1500);
    } else {
      Game2Times5.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times5.hidden = false;
        correctAnswerT5 = randomFromArrT5();
      }, 1500);
    }
    if (rtnG2T5 === 10) {
      correctAnswers.textContent = ``;
      Game2Times6.hidden = false;
      Row.innerText = "כפולות 6";
      Game2Times5.style.display = "none";
    }
  });
}

let rtnG2T6 = 0;
function randomFromArrT6() {
  let randomObject = mathArr6[Math.floor(Math.random() * mathArr6.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT6() {
  let ranNums = mathArrNum6[Math.floor(Math.random() * mathArrNum6.length)];
  return ranNums;
}
let correctAnswerT6 = randomFromArrT6();
let randomDataHT6 = document.getElementsByClassName("randomDataHT6");
for (let index = 0; index < randomDataHT6.length; index++) {
  randomFromArrT6();
  let userAnswerT6;
  setInterval(() => {
    randomDataHT6[index].textContent = getRandomT6();
    userAnswerT6 = Number(randomDataHT6[index].textContent);
  }, 5000);
  randomDataHT6[index].addEventListener("click", () => {
    if (userAnswerT6 === correctAnswerT6) {
      Game2Times6.hidden = true;
      exellent.style.display = "block";
      rtnG2T6++;
      console.log("r", rtnG2T6);
      console.log("u", userAnswerT6);
      console.log("c", correctAnswerT6);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T6}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times6.hidden = false;
        correctAnswerT6 = randomFromArrT6();
      }, 1500);
    } else {
      Game2Times6.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times6.hidden = false;
        correctAnswerT6 = randomFromArrT6();
      }, 1500);
    }
    if (rtnG2T6 === 10) {
      correctAnswers.textContent = ``;
      Game2Times7.hidden = false;
      Row.innerText = "כפולות 7";
      Game2Times6.style.display = "none";
    }
  });
}

let rtnG2T7 = 0;
function randomFromArrT7() {
  let randomObject = mathArr7[Math.floor(Math.random() * mathArr7.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT7() {
  let ranNums = mathArrNum7[Math.floor(Math.random() * mathArrNum7.length)];
  return ranNums;
}
let correctAnswerT7 = randomFromArrT7();
let randomDataHT7 = document.getElementsByClassName("randomDataHT7");
for (let index = 0; index < randomDataHT7.length; index++) {
  randomFromArrT7();
  let userAnswerT7;
  setInterval(() => {
    randomDataHT7[index].textContent = getRandomT7();
    userAnswerT7 = Number(randomDataHT7[index].textContent);
  }, 5000);
  randomDataHT7[index].addEventListener("click", () => {
    if (userAnswerT7 === correctAnswerT7) {
      Game2Times7.hidden = true;
      exellent.style.display = "block";
      rtnG2T7++;
      console.log("r", rtnG2T7);
      console.log("u", userAnswerT7);
      console.log("c", correctAnswerT7);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T7}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times7.hidden = false;
        correctAnswerT7 = randomFromArrT7();
      }, 1500);
    } else {
      Game2Times7.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times7.hidden = false;
        correctAnswerT7 = randomFromArrT7();
      }, 1500);
    }
    if (rtnG2T7 === 10) {
      correctAnswers.textContent = ``;
      Game2Times8.hidden = false;
      Row.innerText = "כפולות 8";
      Game2Times7.style.display = "none";
    }
  });
}


let rtnG2T8 = 0;
function randomFromArrT8() {
  let randomObject = mathArr8[Math.floor(Math.random() * mathArr8.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT8() {
  let ranNums = mathArrNum8[Math.floor(Math.random() * mathArrNum8.length)];
  return ranNums;
}
let correctAnswerT8 = randomFromArrT8();
let randomDataHT8 = document.getElementsByClassName("randomDataHT8");
for (let index = 0; index < randomDataHT8.length; index++) {
  randomFromArrT8();
  let userAnswerT8;
  setInterval(() => {
    randomDataHT8[index].textContent = getRandomT8();
    userAnswerT8 = Number(randomDataHT8[index].textContent);
  }, 5000);
  randomDataHT8[index].addEventListener("click", () => {
    if (userAnswerT8 === correctAnswerT8) {
      Game2Times8.hidden = true;
      exellent.style.display = "block";
      rtnG2T8++;
      console.log("r", rtnG2T8);
      console.log("u", userAnswerT8);
      console.log("c", correctAnswerT8);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T8}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times8.hidden = false;
        correctAnswerT8 = randomFromArrT8();
      }, 1500);
    } else {
      Game2Times8.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times8.hidden = false;
        correctAnswerT8 = randomFromArrT8();
      }, 1500);
    }
    if (rtnG2T8 === 10) {
      correctAnswers.textContent = ``;
      Game2Times9.hidden = false;
      Row.innerText = "כפולות 9";
      Game2Times8.style.display = "none";
    }
  });
}

let rtnG2T9 = 0;
function randomFromArrT9() {
  let randomObject = mathArr9[Math.floor(Math.random() * mathArr9.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT9() {
  let ranNums = mathArrNum9[Math.floor(Math.random() * mathArrNum9.length)];
  return ranNums;
}
let correctAnswerT9 = randomFromArrT9();
let randomDataHT9 = document.getElementsByClassName("randomDataHT9");
for (let index = 0; index < randomDataHT9.length; index++) {
  randomFromArrT9();
  let userAnswerT9;
  setInterval(() => {
    randomDataHT9[index].textContent = getRandomT9();
    userAnswerT9 = Number(randomDataHT9[index].textContent);
  }, 5000);
  randomDataHT9[index].addEventListener("click", () => {
    if (userAnswerT9 === correctAnswerT9) {
      Game2Times9.hidden = true;
      exellent.style.display = "block";
      rtnG2T9++;
      console.log("r", rtnG2T9);
      console.log("u", userAnswerT9);
      console.log("c", correctAnswerT9);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T9}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times9.hidden = false;
        correctAnswerT9 = randomFromArrT9();
      }, 1500);
    } else {
      Game2Times9.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times9.hidden = false;
        correctAnswerT9 = randomFromArrT9();
      }, 1500);
    }
    if (rtnG2T9 === 10) {
      correctAnswers.textContent = ``;
      Game2Times10.hidden = false;
      Row.innerText = "כפולות 10";
      Game2Times9.style.display = "none";
    }
  });
}


let rtnG2T10 = 0;
function randomFromArrT10() {
  let randomObject = mathArr10[Math.floor(Math.random() * mathArr10.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT10() {
  let ranNums = mathArrNum10[Math.floor(Math.random() * mathArrNum10.length)];
  return ranNums;
}
let correctAnswerT10 = randomFromArrT10();
let randomDataHT10 = document.getElementsByClassName("randomDataHT10");
for (let index = 0; index < randomDataHT10.length; index++) {
  randomFromArrT10();
  let userAnswerT10;
  setInterval(() => {
    randomDataHT10[index].textContent = getRandomT10();
    userAnswerT10 = Number(randomDataHT10[index].textContent);
  }, 5000);
  randomDataHT10[index].addEventListener("click", () => {
    if (userAnswerT10 === correctAnswerT10) {
      Game2Times10.hidden = true;
      exellent.style.display = "block";
      rtnG2T10++;
      console.log("r", rtnG2T10);
      console.log("u", userAnswerT10);
      console.log("c", correctAnswerT10);
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T10}`;
      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times10.hidden = false;
        correctAnswerT10 = randomFromArrT10();
      }, 1500);
    } else {
      Game2Times10.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times10.hidden = false;
        correctAnswerT10 = randomFromArrT10();
      }, 1500);
    }
    if (rtnG2T10 === 10) {
      correctAnswers.textContent = ``;
      Game3Times1.hidden = false;
      Row.innerText = "כפולות 1";
      Game2Times10.style.display = "none";
    }
  });
}
