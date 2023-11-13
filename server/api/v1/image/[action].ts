import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4, validate } from "uuid";
import { IImage } from "~/types";

// Путь к файлу с тегами
const tagsFilePath = process.cwd() + "\\database\\tags.json";

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
    case "tags": {
      return getAllTags();
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
    // Загружаем теги из ./database/tags.json
    const existingTags: string[] = loadTags();

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
          const tags = getTags(original.name);
          images.push({
            src: "/images/" + originalFullName,
            tags,
          });

          // Добавляем теги изображения в массив existingTags
          tags.forEach((tag) => {
            if (!existingTags.includes(tag)) {
              existingTags.push(tag);
            }
          });
        } else {
          // Not ok, correct file name then send corrected
          const newUuidFullName = uuidv4() + original.ext;
          fs.rename(
            imageFolder + "\\" + originalFullName,
            imageFolder + "\\" + newUuidFullName,
            (error) => {
              if (!error) {
                images.push({
                  src: "/images/" + newUuidFullName,
                  tags: [],
                });
              }
            },
          );
        }
      }
    });

    // Сортируем и сохраняем обновленные теги в ./database/tags.json
    existingTags.sort();
    saveTags(existingTags);

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

  /**
   * Retrieve tags from txt file if it exists
   * @param filename base filename without extension
   * @returns array of tags or empty array if file doesn't exist or is empty
   */
  function getTags(filename: string): string[] {
    const txtFilePath = path.join(imageFolder, filename + ".txt");
    if (fs.existsSync(txtFilePath)) {
      // If txt file exists, read and parse tags
      const tagsContent = fs.readFileSync(txtFilePath, "utf-8");
      return tagsContent
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
    } else {
      // If txt file doesn't exist, create it with an empty array of tags
      fs.writeFileSync(txtFilePath, "");
      return [];
    }
  }

  /**
   * Load tags from the tags file
   * @returns array of tags
   */
  function loadTags(): string[] {
    try {
      const tagsContent = fs.readFileSync(tagsFilePath, "utf-8");
      return JSON.parse(tagsContent);
    } catch (error) {
      return [];
    }
  }

  /**
   * Save tags to the tags file
   * @param tags array of tags
   */
  function saveTags(tags: string[]): void {
    try {
      fs.writeFileSync(tagsFilePath, JSON.stringify(tags, null, 2), "utf-8");
    } catch (error) {
      // console.error("Error saving tags:", error.message);
    }
  }

  /**
   * Get all tags from the tags file
   * @returns array of tags
   */
  function getAllTags(): string[] {
    return loadTags();
  }
});
