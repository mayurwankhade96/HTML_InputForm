const text = document.querySelector("#text");
const errorText = document.querySelector(".error-text");

text.addEventListener("input", function () {
  let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
  if (nameRegex.test(text.value)) {
    errorText.textContent = "";
  } else {
    errorText.textContent = "Name is Incorrect";
  }
});

const passwordText = document.querySelector("#pwd");
const passwordErrorText = document.querySelector(".pwd-error");

passwordText.addEventListener("input", function () {
  let passwordRegex = RegExp(
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"
  );
  if (passwordRegex.test(passwordText.value)) {
    passwordErrorText.textContent = "";
  } else {
    passwordErrorText.textContent = "Choose Valid Password!";
  }
});

const salary = document.querySelector("#salary");
const salaryOutput = document.querySelector(".salary-output");

salaryOutput.textContent = salary.value;
salary.addEventListener("input", function () {
  salaryOutput.textContent = salary.value;
});
