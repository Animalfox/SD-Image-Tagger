import fs from "node:fs";

export default defineEventHandler((event) => {
  // Detect file action from event
  const action = getRouterParam(event, "action");

  // Setup images folder for scanning files
  const imageFolder = process.cwd() + "\\assets\\images";

  // Send actions to functions
  switch (action) {
    case "list": {
      return getAllFiles();
      break;
    }
    default: {
      return {
        error: action + " is not implemented yet",
      };
    }
  }

  /**
   * Scans image folder and return list of files
   * @returns all file names array (includes non-image format)
   */
  function getAllFiles() {
    const files: Array<string> = [];
    fs.readdirSync(imageFolder).forEach((file) => {
      files.push(file);
    });
    return files;
  }
});
