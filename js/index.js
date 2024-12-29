import { asciiFace } from "./asciiFace2.js";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const preElement = document.getElementById("ascii-face");
preElement.style.fontFamily = "monospace";
let textContent = "";
for (var i = 0; i < asciiFace.length; i++) {
  const char = asciiFace[i];
  textContent += char === "\n" ? char : " ";
}

preElement.textContent = asciiFace;
// for (var i = 0; i < asciiFace.length; i += 15) {
//   const chars = asciiFace.slice(i, i + 15);
//   textContent = textContent.slice(0, i) + chars + textContent.slice(start + 15);
//   preElement.textContent = textContent + "|";
//   await delay(0);
// }
