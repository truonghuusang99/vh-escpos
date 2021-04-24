import { EscBuilder } from './encode/EscBuilder';
import { Image } from './encode/Image';
export declare class VhEscposService {
    constructor();
    builder: EscBuilder;
    /**
     * Initialize a new print queue
     */
    init(): VhEscposService;
    /**
     *
     * @param cutType full|partial
     */
    cut(cutType?: string): VhEscposService;
    /**
     *
     * @param lineCount How many lines to feed
     */
    feed(lineCount?: number): VhEscposService;
    setInverse(value?: boolean): VhEscposService;
    setBold(value?: boolean): VhEscposService;
    setUnderline(value?: boolean): VhEscposService;
    /**
     *
     * @param value left|center\right
     */
    setJustification(value?: string): VhEscposService;
    /**
     *
     * @param value normal|large
     */
    setSize(value?: string): VhEscposService;
    /**
     *
     * @param text
     */
    writeLine(text?: string): VhEscposService;
    /**
     *
     *
     */
    drawLine(): VhEscposService;
    /**
     *
     * @param data
     */
    writeTable(data: any): VhEscposService;
    /**
     *
     * @param size
     */
    setPageSize(size?: number): VhEscposService;
    writeCustomTable(data: any, options?: any): VhEscposService;
    image(image: Image): VhEscposService;
    /**
     * write the current builder value to the driver and clear out the builder
     */
    flush(): Uint8Array;
}
