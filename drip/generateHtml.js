const fs = require("fs");
const path = require("path");
const { Liquid } = require("liquidjs");
const { marked } = require("marked");
const { mkdir } = require("./fsHelpers");

async function generateHtmlFile(markdown, templatePath, buildPath) {
  const engine = new Liquid();
  const { frontmatter, content, meta } = markdown;
  const template = fs.readFileSync(
    path.join(templatePath, frontmatter.template + ".liquid"),
    "utf8"
  );
  const outputFile = path.join(
    buildPath,
    meta.relativePath.replace(".md", ".html")
  );
  const htmlProps = {
    ...frontmatter,
    content: marked(content),
  };
  const html = await engine.parseAndRender(template, htmlProps);
  mkdir(path.dirname(outputFile));
  fs.writeFileSync(outputFile, html);
  console.log(`${meta.relativePath} compiled to ${outputFile}`);
}

module.exports = generateHtmlFile;
