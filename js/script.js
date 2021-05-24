var button = document.querySelector(".got-this");
var box = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");
//console.log(box);
//console.log(button);
//console.log(modalX);

button.addEventListener("click", function () {
  box.classList.add("show-modal");
  button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function () {
  box.classList.remove("show-modal");
  button.innerText = "Whos Got This?";
});
