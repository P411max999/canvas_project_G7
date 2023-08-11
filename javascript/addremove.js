// const item = document.getElementById("item");
const hideLineButton = document.getElementById("line");
const hideShapeButton = document.getElementById("shape");
const hideChooseColorButton = document.getElementById("choosecolor");
const hideToolsButton = document.getElementById("tools");

const AdddrawingLine = document.getElementById("add-drawing-line");
const AddSharp = document.getElementById("add-sharp");
const AddColor = document.getElementById("add-color");
const AddSettings = document.getElementById("add-settings");

const lineBox = document.getElementById("line-box");
const shapeBox = document.getElementById("shape-box");
const colorBox = document.getElementById("color-box");
const toolsBox = document.getElementById("tools-box");

hideLineButton.addEventListener("click", () => {
  lineBox.classList.add("hidden");
});

AdddrawingLine.addEventListener("click", () => {
  lineBox.classList.remove("hidden");
});

hideShapeButton.addEventListener("click", () => {
  shapeBox.classList.add("hidden");
});
AddSharp.addEventListener("click", () => {
  shapeBox.classList.remove("hidden");
});

hideChooseColorButton.addEventListener("click", () => {
  colorBox.classList.add("hidden");
});
AddColor.addEventListener("click", () => {
  colorBox.classList.remove("hidden");
});

hideToolsButton.addEventListener("click", () => {
  toolsBox.classList.add("hidden");
});
AddSettings.addEventListener("click", () => {
  toolsBox.classList.remove("hidden");
});
