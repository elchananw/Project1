let image=[
  "url(./image/Sunset.jpg)",
  "url(./image/sea.jpg)",
 "url(./image/fish.jpg)",
]
const randomImage = image[Math.floor(Math.random() * image.length)];

let numInput = 0;

const container = document.getElementById("container");
container.style.backgroundImage = randomImage;
for (let i = 0; i < 10; i++) {
    const box = `
      <div id='box${i}'>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 1}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 2}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 3}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 4}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 5}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 6}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 7}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 8}'></input>
        </div>
        <div class="divBox">
          <input class= "miniBox" id='input${numInput + 9}'></input>
        </div>
      </div>
      <br>
    `;
    container.innerHTML += box;
    // document.body.innerHTML += box;

    numInput += 10;
};

let miniBox = document.getElementsByClassName("miniBox")

var arrays = Array.from({ length: 10 }, () => Array.from({ length: 11 }, (_, i) => i).sort(() => Math.random() - 0.5));

let random = Math.floor(Math.random() * 10);



  // let numberToPrint = arrays[0][random];
  // let numberToPrint1 = arrays[1][random];
  // let numberToPrint2 = arrays[2][random];
  // let numberToPrint3 = arrays[3][random];
  // let numberToPrint4 = arrays[4][random];
  // let numberToPrint5 = arrays[5][random];
  // let numberToPrint6 = arrays[6][random];
  // let numberToPrint7 = arrays[7][random];
  // let numberToPrint8 = arrays[8][random];
  // let numberToPrint9 = arrays[9][random];
  // console.log(numberToPrint);
  // console.log(numberToPrint2);
  

  
let number1 = 0;
let number2 = 1;

for (let i = 0; i < miniBox.length; i++) {
 
    number1++;

    if (number1 > 10) {
        number2++;
        number1 = 1;
        
    }
    miniBox[i].placeholder = `${number1}x${number2}` ;
    miniBox[i].style.textAlign = "center" ;
    
    const correctAnswer = number2 * number1;

    miniBox[i].addEventListener("input", () => {
        if (miniBox[i].value == correctAnswer ) {
          
            miniBox[i].style.visibility = "hidden";
            miniBox[i + 1].focus();
        }
      
});
};

