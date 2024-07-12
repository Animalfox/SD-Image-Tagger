import Image from "../entities/Image";
import { Path } from "../entities/Path";

export default interface Dataset {
  constructor(path: Path): boolean;
  GetImageById(): Promise<Array<Image>>;
  CreateImage(): Promise<boolean>;
  UpdateImage(): Promise<boolean>;
  DeleteImage(): Promise<boolean>;
}
