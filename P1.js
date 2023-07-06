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
  Game1Times1.hidden = false;
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
function Game2HideShow() {
  if (rtnG2 === 10) {
    Game2Times2.hidden = false;
    Row.innerText = "כפולות 2";
    Game2Times1.hidden = true;
  }
}
let rtnG2 = 0;
let mathArr = [
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

let mathArrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function randomFromArr() {
  let randomObject = mathArr[Math.floor(Math.random() * mathArr.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}

function getRandom() {
  let ranNums = mathArrNum[Math.floor(Math.random() * mathArrNum.length)];
  return ranNums;
}
let correctAnswer = randomFromArr();
let randomDataHT1 = document.getElementsByClassName("randomDataHT1");
for (let index1 = 0; index1 < randomDataHT1.length; index1++) {
  randomFromArr();
  let userAnswer;
  setInterval(() => {
    randomDataHT1[index1].textContent = getRandom();
    userAnswer = Number(randomDataHT1[index1].textContent);
  }, 5000);
  randomDataHT1[index1].addEventListener("click", () => {
    if (userAnswer === correctAnswer) {
      Game2Times1.hidden = true;
      exellent.style.display = "block";
      rtnG2++;
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2}`;
      console.log("r", rtnG2);
      console.log("u", userAnswer);
      console.log("c", correctAnswer);

      setTimeout(() => {
        exellent.style.display = "none";
        Game2Times1.hidden = false;
        correctAnswer = randomFromArr();
      }, 1500);
    } else {
      Game2Times1.hidden = true;
      tryAgain.style.display = "block";
      setTimeout(() => {
        tryAgain.style.display = "none";
        Game2Times1.hidden = false;
        correctAnswer = randomFromArr();
      }, 1500);
    }
    if (rtnG2 === 10) {
      correctAnswers.textContent = ``;
      Game2Times2.hidden = false;
      Row.innerText = "כפולות 2";
      Game2Times1.hidden = true;
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
let mathArr1 = [
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
let mathArrNum1 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let rtnG2T2 = 0;
function randomFromArrT2() {
  let randomObject = mathArr1[Math.floor(Math.random() * mathArr1.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT2() {
  let ranNums = mathArrNum1[Math.floor(Math.random() * mathArrNum1.length)];
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
    Game3HideShow();
  });
}

let mathArr2 = [
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
let mathArrNum2 = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
let rtnG2T3 = 0;
function randomFromArrT3() {
  let randomObject = mathArr2[Math.floor(Math.random() * mathArr2.length)];
  let Question = randomObject.question;
  let Result = randomObject.result;
  questionG2.textContent = Question;
  return Result;
}
function getRandomT3() {
  let ranNums = mathArrNum2[Math.floor(Math.random() * mathArrNum2.length)];
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
      correctAnswers.textContent = `תשובות נכונות: ${rtnG2T2}`;
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
  });
}
