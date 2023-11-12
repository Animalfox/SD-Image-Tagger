import { defineStore } from "pinia";
import { IImage } from "@/types";

export const useStore = defineStore("default", () => {
  const selected = ref<number>(0);
  const images = ref<Array<IImage>>([]);
  const isLoading = ref<boolean>(true); // introduce loading state

  const initializeStore = async () => {
    try {
      images.value = await getImages();
    } finally {
      selectRandomImage();
      isLoading.value = false; // set loading to false whether successful or not
    }
  };
  initializeStore();

  const selectRandomImage = () => {
    const randomSelected = Math.floor(Math.random() * images.value.length);
    selected.value = randomSelected;
  };

  return { isLoading, selected, images, selectRandomImage };
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
