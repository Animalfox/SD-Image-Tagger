import Image from "../../domain/entities/Image";
import Dataset from "../../domain/repositories/Dataset";

export default class FolderDataset implements Dataset {
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
}
