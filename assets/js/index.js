import { asciiFace } from "./asciiFace.js";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const preElement = document.getElementById("ascii-face");
preElement.style.fontFamily = "monospace";
let textContent = "";
for (var i = 0; i < asciiFace.length; i += 10) {
  const char = asciiFace[i];
  textContent += char === "\n" ? char : "";
}

preElement.textContent = asciiFace;

// for (var i = 0; i < asciiFace.length; i += 10) {
//   const chars = asciiFace.slice(i, i + 10);
//   textContent += chars;
//   preElement.textContent = textContent;
//   await delay(0);
// }
