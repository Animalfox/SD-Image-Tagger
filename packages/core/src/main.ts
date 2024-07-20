import GetImagesFromFolderUseCase from "@application/useCases/GetImagesFromFolderUseCase";
import Image from "@domain/entities/Image";
import FolderImageRepository from "@infrastructure/repositories/FolderImageRepository";

/**
 * The entry point of the application.
 *
 * This function initializes the necessary components, executes the use case to
 * retrieve images from a specified folder, and logs the images and their tags
 * to the console.
 *
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
(async function main(): Promise<void> {
  const imagesFolderPath =
    "/home/animalfox/Git/Animalfox/SD-Image-Tagger/dataset";

  // Initialize the repository with the path to the images folder
  const imageRepository = new FolderImageRepository(imagesFolderPath);

  // Create the use case for getting images from the repository
  const getImagesUseCase = new GetImagesFromFolderUseCase(imageRepository);

  // Execute the use case and retrieve the images
  const images: Array<Image> = await getImagesUseCase.execute();

  // Log the images retrieved from the dataset
  console.log("Images in dataset", images);

  // Log the tags of each image
  images.forEach(image => {
    console.log(`tags of ${image.name}`, image.getTags());
  });
})();
