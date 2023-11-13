import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4, validate } from "uuid";
import { IImage } from "~/types";

export default defineEventHandler((event) => {
  // Detect file action from event
  const action = getRouterParam(event, "action");

  // Setup images folder for scanning files
  const imageFolder = process.cwd() + "\\public\\images";

  // Define valid image extensions
  const validImageExtensions = [".png"];

  // Send actions to functions
  switch (action) {
    case "list": {
      return getAllImages();
    }
    default: {
      return {
        error: `${action} is not implemented yet`,
      };
    }
  }

  /**
   * Scans image folder, then prepare files and return list
   * @returns all file names array (includes non-image format)
   */
  function getAllImages(): IImage[] {
    const images: IImage[] = [];
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
          const image: IImage = {
            src: "/images/" + originalFullName,
            tags: [], // Add your logic to extract tags from the file
          };
          images.push(image);
        } else {
          // Not ok, correct file name then send corrected
          const newUuidFullName = uuidv4() + original.ext;
          fs.rename(
            imageFolder + "\\" + originalFullName,
            imageFolder + "\\" + newUuidFullName,
            (error) => {
              if (!error) {
                const image: IImage = {
                  src: "/images/" + newUuidFullName,
                  tags: [], // Add your logic to extract tags from the file
                };
                images.push(image);
              }
            },
          );
        }
      }
    });
    return images;
  }

  /**
   * Function for validating file extension
   * @param filename for validate
   * @param exts array of allowed extensions
   * @returns state of valid ( true | false )
   */
  function hasValidExtension(filename: string, exts: string[]): boolean {
    return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
      filename,
    );
  }
});
