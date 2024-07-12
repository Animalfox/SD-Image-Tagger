import Image from "../../domain/entities/Image";
import { Path } from "../../domain/entities/Path";
import Dataset from "../../domain/repositories/Dataset";
import fs from "node:fs";

export default class FolderDataset implements Dataset {
    private path: Path;
    ["constructor"](path: Path): boolean {
        this.path = path;
        return this.isPathCorrect(path);
    }
    GetImageById(): Promise<Array<Image>> {
        throw new Error("Method not implemented.");
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
