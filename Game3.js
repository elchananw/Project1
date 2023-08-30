let image = ["url(./pizza2.jpeg)", "url(./pizzalogo.jpeg)", "url(./fish.jpg)"];
const randomImage = image[Math.floor(Math.random() * image.length)];

let numInput = 0;

const container = document.getElementById("container");
container.style.backgroundImage = randomImage;
for (let i = 0; i < 10; i++) {
  const box = `
      <div id='box${i}'>
        <div>
          <input class= "miniBox" id='input${numInput}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 1}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 2}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 3}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 4}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 5}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 6}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 7}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 8}'></input>
        </div>
        <div>
          <input class= "miniBox" id='input${numInput + 9}'></input>
        </div>
      </div>
      <br>
    `;
  container.innerHTML += box;
  // document.body.innerHTML += box;

  numInput += 10;
}

let miniBox = document.getElementsByClassName("miniBox");

let random = Math.floor(Math.random() * 10);

let number1 = 0;
let number2 = 1;
let arr = new Array(9);
for (let i = 0; i < miniBox.length; i++) {
  number1++;

  if (number1 > 10) {
    number2++;
    number1 = 1;
  }
  miniBox[i].placeholder = `${number2}x${number1}`;
  miniBox[i].style.textAlign = "center";

  const correctAnswer = number2 * number1;

  miniBox[i].addEventListener("input", () => {
    if (miniBox[i].value == correctAnswer) {
      miniBox[i].style.visibility = "hidden";
      miniBox[i + 1].focus();
    }
  });
}
