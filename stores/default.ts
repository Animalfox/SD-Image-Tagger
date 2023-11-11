import { defineStore } from "pinia";

export const useStore = defineStore("default", () => {
    const images: Array<string> = getImages('@/images/*.png')
    return { images }
})

function getImages(query: string): Array<string> {
    interface globItem {
        default: string
    }
    const glob = import.meta.glob('@/images/*.png', { eager: true }) as unknown as Array<globItem>
    let images: Array<string> = []
    Object.values(glob).forEach((g: globItem) => {
        images.push(g.default)
    });
    return images
}