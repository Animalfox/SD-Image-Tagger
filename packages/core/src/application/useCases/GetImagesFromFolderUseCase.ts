import Image from "@domain/entities/Image";
import ImageRepository from "@domain/interfaces/ImageRepository";

/**
 * Use case for retrieving images from the repository.
 */
export default class GetImagesFromFolderUseCase {
  private _imageRepository: ImageRepository;

  /**
   * Creates an instance of GetImagesFromFolderUseCase.
   *
   * @param {ImageRepository} imageRepository - The repository to retrieve
   * images from.
   */
  constructor(imageRepository: ImageRepository) {
    this._imageRepository = imageRepository;
  }

  /**
   * Executes the use case to get images from the repository.
   *
   * @returns {Promise<Array<Image>>} A promise that resolves to an array of
   * images.
   */
  public execute = async (): Promise<Array<Image>> => {
    return this._imageRepository.getImages();
  };
}
