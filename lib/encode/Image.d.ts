export declare class Image {
    load(dom: any): Promise<Image>;
    width: number;
    height: number;
    private data;
    constructor(pixels: boolean[], width: number, height: number);
    toRaster(): IRaster;
}
export interface IRaster {
    data: Uint8Array;
    height: number;
    width: number;
}
