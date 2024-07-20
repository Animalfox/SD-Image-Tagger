import Tag from "./Tag";

/**
 * Represents an image with a path and tags.
 *
 * The `Image` class is used to manage the path and tags associated with an
 * image. It provides methods to create, read, update, and delete tags.
 */
export default class Image {
  public readonly name: string;
  private _tags: Array<Tag> = [];

  /**
   * Creates an instance of the `Image` class.
   *
   * @param {string} name - The name of the image.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Creates and adds a tag to the image if it does not already exist.
   *
   * @param {Tag} tag - The tag to add.
   */
  public createTag(tag: Tag): void {
    if (!this._tags.some(t => t.name === tag.name)) {
      this._tags.push(tag);
    }
  }

  /**
   * Reads the tags associated with the image.
   *
   * @returns {Array<Tag>} An array of tags.
   */
  public getTags(): Array<Tag> {
    return this._tags;
  }

  /**
   * Updates an existing tag with a new tag.
   *
   * @param {Tag} oldTag - The tag to be updated.
   * @param {Tag} newTag - The new tag.
   */
  public updateTag(oldTag: Tag, newTag: Tag): void {
    const index = this._tags.findIndex(t => t.name === oldTag.name);
    if (index !== -1) {
      this._tags[index] = newTag;
    }
  }

  /**
   * Deletes a tag from the image.
   *
   * @param {Tag} tag - The tag to delete.
   */
  public deleteTag(tag: Tag): void {
    this._tags = this._tags.filter(t => t.name !== tag.name);
  }
}
