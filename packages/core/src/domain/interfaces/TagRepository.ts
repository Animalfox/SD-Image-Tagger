import Tag from "@domain/entities/Tag";

/**
 * Interface for the Tag repository, providing basic CRUD operations.
 *
 * This interface defines methods for creating, retrieving, updating, and
 * deleting tags.
 */
export default interface TagRepository {
  /**
   * Creates a new tag.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  createTag(name: string): Promise<boolean>;

  /**
   * Reads a tag by its ID.
   *
   * @returns {Promise<Array<Tag>>} - A promise that resolves to an array of
   * `Tag` objects.
   */
  getTag(name: string): Promise<Tag | null>;

  /**
   * Updates an existing tag.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  updateTag(name: string): Promise<boolean>;

  /**
   * Deletes a tag.
   *
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  deleteTag(name: string): Promise<boolean>;
}
