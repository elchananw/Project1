const loginEn = document.getElementById("loginEn");
const loginHe = document.getElementById("loginHe");
const signUpEn = document.getElementById("signUpEn");
const signUpHe = document.getElementById("signUpHe");
console.log(lang);
let he = true;
lang.addEventListener("click", () => {
  he = !he;
  console.log(he);
  if (he === false) {
    loginEn.hidden = true;
    loginHe.hidden = false;

    // changeLangImg.src = "united-states-of-america.png";
    // changeLangImg1.src = "united-states-of-america.png";
    // changeLang.innerText = "English";
    // changeLang1.innerText = "English";
    // signupHeader.innerHTML = "הרשמה";
    // signupHeader.style.direction = "rtl";
    // loginHeader.innerHTML = "התחברות";
    // loginHeader.style.direction = "rtl";
    // userName[0].placeholder = "שם משתמש";
    // userName[0].style.direction = "rtl";
    // userName[1].placeholder = "שם משתמש";
    // userName[1].style.direction = "rtl";
    // pwInpts[0].placeholder = "סיסמה";
    // pwInpts[0].style.direction = "rtl";
    // pwInpts[1].placeholder = "סיסמה";
    // pwInpts[1].style.direction = "rtl";
    // confirmPassword[0].placeholder = "אימות סיסמה";
    // confirmPassword[0].style.direction = "rtl";
    // forgotPassword.innerHTML = "שכחתי סיסמה";
    // forgotPassword.style.direction = "rtl";
    // loginBtn.innerHTML = "התחברות";
    // loginBtn.style.direction = "rtl";
    // signupBtn.innerHTML = "הרשמה";
    // signupBtn.style.direction = "rtl";
    // ifNotReg.innerHTML =
    //   'עדיין לא נרשמת <span>?</span> <a href="#" class="link signUpLink">הרשם</a>';
    // ifNotReg.style.direction = "rtl";
    // ifReg.innerHTML =
    //   'כבר רשום <span>?</span> <a href="#" class="link loginLink">התחבר</a>';
    // ifReg.style.direction = "rtl";
    // email[0].placeholder = 'דוא"ל';
    // email[0].style.direction = "rtl";
    // facebook.innerHTML = "התחבר באמצעות פייסבוק";
    // facebook.style.direction = "rtl";
    // facebook2.innerHTML = "התחבר באמצעות פייסבוק";
    // facebook2.style.direction = "rtl";
    // google.innerHTML = "התחבר באמצעות גוגל";
    // google.style.direction = "rtl";
    // google2.innerHTML = "התחבר באמצעות גוגל";
    // google2.style.direction = "rtl";
    // inputs.forEach((input) => {
    //   input.style.paddingRight = "15px";
    // });
    // eyeIcon.forEach((eye) => {
    //   eye.style.left = "15px";
    // });
    // const forms = document.querySelector(".forms");
    // const links = document.querySelectorAll(".link");
    // links.forEach((link) => {
    //   link.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     forms.classList.toggle("show-signup");
    //   });
    // });
    // he = true;
  } else {
    console.log("its already in he", he);
    loginEn.hidden = false;
    loginHe.hidden = true;
    //   console.log("its already in he");
    //   he = false;
    //   setTimeout(() => {
    //     location.reload();
    //   }, 100);
  }
});

const forms = document.querySelector(".forms");
const pwShowHideEn = document.querySelectorAll(".eye-icon");
const pwShowHideHe = document.querySelectorAll(".eye-iconheb");
const links = document.querySelectorAll(".link");

console.log(forms, pwShowHideEn, links);
pwShowHideEn.forEach((eyeIcon) => {
  let pwInputs =
    eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  pwInputs.forEach((password) => {
    eyeIcon.addEventListener("click", () => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
});
pwShowHideHe.forEach((eyeIcon) => {
  let pwInputs =
    eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  pwInputs.forEach((password) => {
    eyeIcon.addEventListener("click", () => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
});

