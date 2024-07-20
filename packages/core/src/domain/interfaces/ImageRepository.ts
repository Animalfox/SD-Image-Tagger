import Image from "@domain/entities/Image";

/**
 * Interface for the Image repository, providing basic CRUD operations.
 *
 * This interface defines methods for creating, retrieving, updating, and
 * deleting images.
 */
export default interface ImageRepository {
  /**
   * Creates a new image.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  createImage(): Promise<boolean>;

  /**
   * Reads an image by its ID.
   *
   * @returns {Promise<Array<Image>>} - A promise that resolves to an array of
   * `Image` objects.
   */
  getImageById(): Promise<Array<Image>>;

  /**
   * Updates an existing image.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  updateImage(): Promise<boolean>;

  /**
   * Deletes an image.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  deleteImage(): Promise<boolean>;
}
