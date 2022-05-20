let input = document.querySelector("#color-field");
let button = document.querySelector("#set-color");
let square = document.querySelector(".square ");
let brush = document.querySelector(".brush ");
let swatch1 = document.getElementById("box1");
let swatch2 = document.getElementById("box2");
let swatch3 = document.getElementById("box3");

let count = 0;
button.addEventListener("click" || "keyup", (event) => {
  event.preventDefault();
  brush.style.background = `${input.value}`;
  if (count == 0) {
    swatch1.style.background = `${input.value}`;
    count++;
  } else if (count == 1) {
    swatch2.style.background = `${input.value}`;
    count++;
  } else if (count == 2) {
    swatch3.style.background = `${input.value}`;
    count = 0;
  }
});

for (i = 0; i < 8000; i++) {
  let newdiv = document.createElement("div");
  newdiv.className = "square";
  newdiv.addEventListener("mouseover", (event) => {
    event.preventDefault();
    newdiv.style.background = brush.style.background;
  });
  document.body.appendChild(newdiv);
}

swatch1.addEventListener("click", (event) => {
  event.preventDefault();
  brush.style.background = swatch1.style.background;
});

swatch2.addEventListener("click", (event) => {
  event.preventDefault();
  brush.style.background = swatch2.style.background;
});

swatch3.addEventListener("click", (event) => {
  event.preventDefault();
  brush.style.background = swatch3.style.background;
});
