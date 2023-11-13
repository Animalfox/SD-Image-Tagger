import { defineStore } from "pinia";
import { IImage } from "@/types";

export const useStore = defineStore("default", () => {
  const selected = ref<number>(0);
  const images = ref<Array<IImage>>([]);
  const tags = ref<Array<string>>([]);
  const isLoading = ref<boolean>(true);

  const initializeStore = async () => {
    try {
      images.value = await getImages();
      tags.value = await getTags();
    } finally {
      selectRandomImage();
      isLoading.value = false;
    }
  };
  initializeStore();

  const selectRandomImage = () => {
    const randomSelected = Math.floor(Math.random() * images.value.length);
    selected.value = randomSelected;
  };

  const selectImageBySrc = (src: string) => {
    selected.value = images.value.indexOf(
      images.value.find((el) => {
        return el.src === src;
      }),
    );
  };

  return {
    isLoading,
    selected,
    images,
    tags,
    selectRandomImage,
    selectImageBySrc,
  };
});

async function getImages(): Promise<IImage[]> {
  try {
    const response = await fetch("http://localhost:3000/api/v1/image/list");
    if (!response.ok) {
      throw new Error(`Failed to fetch images. Status: ${response.status}`);
    }
    const images: Array<IImage> = await response.json();
    return images;
  } catch (error) {
    return [];
  }
}

async function getTags(): Promise<string[]> {
  try {
    const response = await fetch("http://localhost:3000/api/v1/image/tags");
    if (!response.ok) {
      throw new Error(`Failed to fetch tags. Status: ${response.status}`);
    }
    const tags: Array<string> = await response.json();
    return tags;
  } catch (error) {
    return [];
  }
}
