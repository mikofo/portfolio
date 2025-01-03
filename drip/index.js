const fs = require("fs");
const path = require("path");
const { mkdir, rmdir, getAllFiles } = require("./fsHelpers");
const generateHtmlFile = require("./generateHtml");
const parseMarkdown = require("./parseMarkdown");
const { Liquid } = require("liquidjs");

const baseDir = process.cwd();
const buildDirectory = path.join(baseDir, "build");
const markdownDirectory = path.join(baseDir, "src/markdown");
const templateDirectory = path.join(baseDir, "src/templates");
const collections = {};

rmdir(buildDirectory);
mkdir(buildDirectory);

const markdownFiles = getAllFiles(markdownDirectory);
for (const markdownFile of markdownFiles) {
  const markdown = parseMarkdown(markdownFile.fullPath);
  const collection = markdownFile.relativePath.split("/")[0];
  if (collections[collection])
    collections[collection].push(markdown.frontmatter);
  else collections[collection] = [markdown.frontmatter];
  generateHtmlFile(
    { ...markdown, meta: markdownFile },
    templateDirectory,
    buildDirectory
  );
}

const engine = new Liquid();
const template = fs.readFileSync(
  path.join(templateDirectory, "index.liquid"),
  "utf8"
);
engine.parseAndRender(template, { collections }).then((html) => {
  fs.writeFileSync(path.join(buildDirectory, "index.html"), html);
  console.log("index.html compiled");
});
