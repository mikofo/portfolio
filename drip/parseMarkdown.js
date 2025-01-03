const fs = require("fs");
function parseMarkdown(path) {
  const fileContent = fs.readFileSync(path, "utf8");

  if (!fileContent.startsWith("---")) {
    return {
      frontmatter: {},
      content: fileContent,
    };
  }

  const endOfFrontmatter = fileContent.indexOf("---", 3);
  if (endOfFrontmatter === -1) {
    return {
      frontmatter: {},
      content: fileContent,
    };
  }

  const frontmatterRaw = fileContent.slice(3, endOfFrontmatter).trim();
  const content = fileContent.slice(endOfFrontmatter + 3).trim();

  const frontmatter = {};
  frontmatterRaw.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      frontmatter[key.trim()] = valueParts.join(":").trim();
    }
  });

  return {
    frontmatter,
    content,
  };
}

module.exports = parseMarkdown;
