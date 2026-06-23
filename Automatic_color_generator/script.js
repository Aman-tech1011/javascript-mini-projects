const randonColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startColorChange = function () {
  intervalId = setInterval(setColor, 1000);

  function setColor() {
    document.body.style.backgroundColor = randonColor();
  }
};
const stopColorChange = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startColorChange);

document.querySelector("#stop").addEventListener("click", stopColorChange);
