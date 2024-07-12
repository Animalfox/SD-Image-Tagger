import iImage from "../interfaces/iImage";

export default interface Dataset {
  GetImageById(): Promise<Array<iImage>>;
  CreateImage(): Promise<boolean>;
  UpdateImage(): Promise<boolean>;
  DeleteImage(): Promise<boolean>;
}
