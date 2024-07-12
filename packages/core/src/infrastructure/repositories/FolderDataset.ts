import Image from "../../domain/entities/Image";
import { Path } from "../../domain/entities/Path";
import Dataset from "../../domain/repositories/Dataset";
import fs from "node:fs";

export const useValidExtension = (filename: string, exts: string[]) => {
    return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
      filename,
    );
  };

export default class FolderDataset implements Dataset {
    private path: Path;
    ["constructor"](path: Path): boolean {
        this.path = path;
        return this.isPathCorrect(path);
    }
    async GetImageById(): Promise<Array<Image>> {
        const images: Array<Image> = [];
        const isPng = (path: Path) => {
            return new RegExp("(" + "png".replace(/\./g, "\\.") + ")$").test(path);
        }
        const pngArr = await fs.readdirSync(this.path).filter(elem => isPng(elem));
        /** Because image interface is empty, nothing to add into images: empty elements */
        pngArr.forEach(i => images.push(new Image()));
        return images;
    }
    CreateImage(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    UpdateImage(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    DeleteImage(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    private isPathCorrect(path: Path): boolean {
        return fs.lstatSync(path).isDirectory();
    }
}
