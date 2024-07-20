import Image from "@domain/entities/Image";
import ImageRepository from "@domain/interfaces/ImageRepository";
import * as fs from "node:fs";

export const useValidExtension = (filename: string, exts: string[]) => {
  return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
    filename
  );
};

export default class FolderImageRepository implements ImageRepository {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  createImage(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getImageById(): Promise<Array<Image>> {
    const images: Array<Image> = [];
    const isPng = (path: string) => {
      return new RegExp("(" + "png".replace(/\./g, "\\.") + ")$").test(path);
    };
    const pngArr = fs.readdirSync(this.path).filter(elem => isPng(elem));
    /** Because image interface is empty, nothing to add into images: empty elements */
    pngArr.forEach(p => images.push(new Image(p)));
    return images;
  }

  updateImage(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  deleteImage(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
