/**
 * Represents an image with a path.
 *
 * Objects of the `Image` class are used as child elements of the boundary
 * `ImageRepository` interface. They provide a summary of useful information
 * about an image, including its path and tags. Currently, tags are not included
 * in the Image class as they are still under development.
 */
export default class Image {
  private path: string;

  /**
   * Creates an instance of the `Image` class.
   *
   * @param {string} path - The path to the image.
   */
  constructor(path: string) {
      this.path = path;
  }
}
