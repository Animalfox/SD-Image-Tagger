import Image from "../entities/Image";

export default interface Dataset {
    GetImageById(): Promise<Array<Image>>;
    CreateImage(): Promise<boolean>;
    UpdateImage(): Promise<boolean>;
    DeleteImage(): Promise<boolean>;
}
