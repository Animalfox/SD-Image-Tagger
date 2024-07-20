/**
 * Represents a tag with a name.
 *
 * Objects of the `Tag` class are used as child elements of the boundary
 * `TagRepository` interface. They provide a summary of useful information about
 * a tag, including its name and properties. Currently, properties are not
 * included in the Tag class as they are still under development.
 */
export default class Tag {
  private name: string;

  /**
   * Creates an instance of the `Tag` class.
   *
   * @param {string} name - The name of the tag.
   */
  constructor(name: string) {
    this.name = name;
  }
}
