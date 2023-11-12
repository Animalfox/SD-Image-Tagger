import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4, validate } from "uuid";

export default defineEventHandler((event) => {
  // Detect file action from event
  const action = getRouterParam(event, "action");

  // Setup images folder for scanning files
  const imageFolder = process.cwd() + "\\assets\\images";

  // Send actions to functions
  switch (action) {
    case "list": {
      return getAllFiles();
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
    fs.readdirSync(imageFolder).forEach((originalFullName) => {
      // Describe original file
      const original = {
        name: path.parse(originalFullName).name,
        ext: path.parse(originalFullName).ext,
        uuidValid: validate(path.parse(originalFullName).name),
      };
      if (original.uuidValid) {
        // It's ok, send file
        files.push(originalFullName);
      } else {
        // Not ok, correct file name then send corrected
        const newUuidFullName = uuidv4() + original.ext;
        fs.rename(
          imageFolder + "\\" + originalFullName,
          imageFolder + "\\" + newUuidFullName,
          (error) => {
            if (error) {
              console.log(error);
            } else {
              // File renamed
              files.push(newUuidFullName);
            }
          },
        );
      }
    });
    return files;
  }
});
