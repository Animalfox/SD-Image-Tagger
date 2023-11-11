import { defineStore } from "pinia";

export interface IImage {
  path: string;
}

export const useStore = defineStore("default", () => {
  const images: Array<IImage> = getImages();
  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };
  return { images, getRandomImage };
});

function getImages(): Array<IImage> {
  interface globItem {
    default: string;
  }
  const glob = import.meta.glob("@/public/images/*.png", {
    eager: true,
  }) as unknown as Array<globItem>;
  const images: Array<IImage> = [];
  Object.values(glob).forEach((g: globItem) => {
    const image: IImage = {
      path: g.default.replace("/_nuxt/public/", ""),
    };
    images.push(image);
  });
  return images;
}
