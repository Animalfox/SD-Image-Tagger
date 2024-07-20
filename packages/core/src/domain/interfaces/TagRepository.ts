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
   * @param {string} name - The name of the tag.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  createTag(name: string): Promise<boolean>;

  /**
   * Reads all tags.
   *
   * @returns {Promise<Array<Tag>>} - A promise that resolves to an array of
   * `Tag` objects.
   */
  getAllTags(): Promise<Array<Tag>>;

  /**
   * Reads a tag by its name.
   *
   * @param {string} name - The name of the tag.
   * @returns {Promise<Tag | null>} - A promise that resolves to a `Tag` object
   * or null if not found.
   */
  getTagByName(name: string): Promise<Tag | null>;

  /**
   * Updates an existing tag.
   *
   * @param {string} name - The name of the tag.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  updateTag(name: string): Promise<boolean>;

  /**
   * Deletes a tag.
   *
   * @param {string} name - The name of the tag.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean
   * indicating the success of the operation.
   */
  deleteTag(name: string): Promise<boolean>;
}
