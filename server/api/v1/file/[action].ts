import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4, validate } from "uuid";

export default defineEventHandler((event) => {
  // Detect file action from event
  const action = getRouterParam(event, "action");

  // Setup images folder for scanning files
  const imageFolder = process.cwd() + "\\assets\\images";

  // Define valid image extensions
  // By default SD Works with png only image types, but if you want to improve
  // image filetypes compatibility you need to add new image extension to this
  // array and convert image locally to png
  const validImageExtensions = [".png"];

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
   * Scans image folder, then prepare files and return list
   * @returns all file names array (includes non-image format)
   */
  function getAllFiles() {
    const files: Array<string> = [];
    fs.readdirSync(imageFolder).forEach((originalFullName) => {
      // Process only valid (image) extension files
      if (hasValidExtension(originalFullName, validImageExtensions)) {
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
              if (!error) {
                files.push(newUuidFullName);
              }
            },
          );
        }
      }
    });
    return files;
  }

  /**
   * Function for validating file extension
   * @param filename for validate
   * @param exts array of allowed extensions
   * @returns state of valid ( true | false )
   */
  function hasValidExtension(filename, exts) {
    return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
      filename,
    );
  }
});
