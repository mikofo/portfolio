const fs = require("fs");
const path = require("path");

function mkdir(path) {
  console.log(path);
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

function rmdir(path) {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true });
  }
}

function getAllFiles(dir, baseDir = dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, baseDir));
    } else {
      console.log(entry.name, baseDir);
      results.push({ fullPath, relativePath });
    }
  }

  return results;
}

module.exports = {
  mkdir,
  rmdir,
  getAllFiles,
};
