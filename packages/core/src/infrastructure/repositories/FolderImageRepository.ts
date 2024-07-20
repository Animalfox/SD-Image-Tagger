import Image from "@domain/entities/Image";
import Tag from "@domain/entities/Tag";
import ImageRepository from "@domain/interfaces/ImageRepository";
import * as fs from "node:fs";
import * as path from "path";

export const useValidExtension = (filename: string, exts: string[]) => {
  return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
    filename
  );
};

export default class FolderImageRepository implements ImageRepository {
  private _imagesFolderPath: string;
  private _images: Array<Image> = [];

  constructor(imagesFolderPath: string) {
    this._imagesFolderPath = imagesFolderPath;
    this.init(imagesFolderPath);
  }

  init(imagesFolderPath: string): void {
    const is = (ext: string, path: string) => {
      return new RegExp("(" + ext.replace(/\./g, "\\.") + ")$").test(path);
    };
    const pngImagePatches = fs
      .readdirSync(imagesFolderPath)
      .filter(imagePath => is("png", imagePath));
    pngImagePatches.forEach(imagePath => {
      const imageFullPath = path.join(imagesFolderPath, imagePath);
      const imageBaseName = path.basename(imagePath, ".png");
      const txtFilePath = path.join(imagesFolderPath, imageBaseName + ".txt");

      // Check if the .txt file exists, if not create it
      if (!fs.existsSync(txtFilePath)) {
        fs.writeFileSync(txtFilePath, "", "utf8");
      }

      // Create an Image instance
      const image = new Image(imageFullPath);

      // Read tags from the text file and add them to the image
      const tagsContent = fs.readFileSync(txtFilePath, "utf8");
      const tags = tagsContent
        .split(/[\n,]+/)
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      tags.forEach(tagName => {
        image.createTag(new Tag(tagName));
      });

      this._images.push(image);
    });
  }

  createImage(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getImages(): Promise<Array<Image>> {
    return this._images;
  }

  async getImageByName(name: string): Promise<Image | null> {
    const queryResult = this._images.filter(image => image.name === name);
    if (queryResult.length > 0) {
      return queryResult[0];
    }
    return null;
  }

  updateImage(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  /**
   * Deletes the specified image and its associated text file from the filesystem.
   *
   * @param {Image} image - The image to delete.
   * @returns {Promise<boolean>} - A promise that resolves to true if the image and text file were successfully deleted, false otherwise.
   */
  async deleteImage(image: Image): Promise<boolean> {
    const imageFilePath = path.join(
      this._imagesFolderPath,
      `${image.name}.png`
    );
    const txtFilePath = path.join(this._imagesFolderPath, `${image.name}.txt`);

    try {
      // Check and delete the image file if it exists
      if (fs.existsSync(imageFilePath)) {
        fs.unlinkSync(imageFilePath);
      }

      // Check and delete the text file if it exists
      if (fs.existsSync(txtFilePath)) {
        fs.unlinkSync(txtFilePath);
      }

      // Remove the image from the _images array
      this._images = this._images.filter(img => img.name !== image.name);

      return true;
    } catch (error) {
      console.error("Error deleting image or text file:", error);
      return false;
    }
  }
}
