import { defineStore } from "pinia";

export const useStore = defineStore("default", () => {
    const data = "Pinia is connected"
    return { data }
})
