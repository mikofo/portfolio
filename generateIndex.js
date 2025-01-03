const fs = require("fs");
const path = require("path");
const { mkdir, rmdir, getAllFiles } = require("./drip/fsHelpers");
const generateHtmlFile = require("./drip/generateHtml");

const buildDirectory = path.join(__dirname, "build");
const markdownDirectory = path.join(__dirname, "src/markdown");
const templateDirectory = path.join(__dirname, "src/templates");
const pages = {};

rmdir(buildDirectory);
mkdir(buildDirectory);

const markdownFiles = getAllFiles(markdownDirectory);
for (const markdownFile of markdownFiles) {
  generateHtmlFile(
    markdownFile,
    templateDirectory,
    path.join(__dirname, buildDirectory)
  );
}
