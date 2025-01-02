const fs = require("fs");
const { Liquid } = require("liquidjs");
const { marked } = require("marked");
const path = require("path");

const engine = new Liquid();

function extractTitle(markdown) {
  const lines = markdown.split("\n");
  for (const line of lines) {
    const match = line.match(/^# (.+)$/);
    if (match) {
      return match[1];
    }
  }
  return "Untitled Post";
}

async function generatePost(markdownFile, outputFile) {
  const templatePath = path.join(__dirname, "src", "templates", "post.liquid");
  const template = fs.readFileSync(templatePath, "utf8");
  const markdown = fs.readFileSync(markdownFile, "utf8");
  const title = extractTitle(markdown);
  const contentHtml = marked(markdown);

  const blogData = {
    title,
    date: new Date().toLocaleDateString(),
    year: new Date().getFullYear(),
    content: contentHtml,
  };

  const html = await engine.parseAndRender(template, blogData);

  fs.writeFileSync(outputFile, html);
  console.log(`Blog post saved to ${outputFile}`);
}

const mdDir = path.join(__dirname, "src/md");
const markdownFiles = fs
  .readdirSync(mdDir)
  .filter((file) => file.endsWith(".md"));

for (const markdownFile of markdownFiles) {
  const inputPath = path.join(mdDir, markdownFile);
  if (!fs.existsSync("build/posts")) {
    fs.mkdirSync("build/posts", { recursive: true });
  }
  const outputFile = path.join(
    __dirname,
    "build",
    "posts",
    markdownFile.replace(".md", ".html")
  );
  generatePost(inputPath, outputFile);
}
