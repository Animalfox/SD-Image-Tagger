import iImage from "../interfaces/iImage";

export default class Image implements iImage {
    readonly path: string;
    constructor(path: string) {
        this.path = path;
    }
}