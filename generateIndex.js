const fs = require("fs");
const { Liquid } = require("liquidjs");
const path = require("path");

const engine = new Liquid();
const templatePath = path.join(__dirname, "src", "templates", "index.liquid");
const template = fs.readFileSync(templatePath, "utf8");
engine.parseAndRender(template).then((html) => {
  if (!fs.existsSync("build")) {
    fs.mkdirSync("build");
  }
  const outputFile = path.join(__dirname, "build", "index.html");
  fs.writeFileSync(outputFile, html);
  console.log(`index.html saved to ${outputFile}`);
});
