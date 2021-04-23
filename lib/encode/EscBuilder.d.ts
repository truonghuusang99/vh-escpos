export declare class EscBuilder {
    private encoder;
    private buffer;
    private size;
    constructor();
    init(): EscBuilder;
    flush(): Uint8Array;
    feed(lineCount?: number): EscBuilder;
    cut(cutType?: string): EscBuilder;
    writeLine(value: string): EscBuilder;
    drawLine(): EscBuilder;
    setPageSize(size: number): EscBuilder;
    writeTable(data: any): EscBuilder;
    writeCustomTable(data: any, options: any): EscBuilder;
    setInverse(inverse?: boolean): EscBuilder;
    setUnderline(value?: boolean): EscBuilder;
    setJustification(value?: string): EscBuilder;
    setBold(bold?: boolean): EscBuilder;
    /**
    @param mode 0, 0x30
    */
    setSize(size?: string): EscBuilder;
    private write;
}
