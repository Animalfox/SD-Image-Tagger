import Image from "@domain/entities/Image";

/**
 * Interface for the Image repository, providing basic CRUD operations.
 *
 * This interface defines methods for creating, retrieving, updating, and deleting images.
 */
export default interface ImageRepository {
  /**
   * Creates a new image.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the operation.
   */
  CreateImage(): Promise<boolean>;

  /**
   * Read an image by its ID.
   *
   * @returns {Promise<Array<Image>>} - A promise that resolves to an array of `Image` objects.
   */
  GetImageById(): Promise<Array<Image>>;

  /**
   * Updates an existing image.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the operation.
   */
  UpdateImage(): Promise<boolean>;

  /**
   * Deletes an image.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the operation.
   */
  DeleteImage(): Promise<boolean>;
}
