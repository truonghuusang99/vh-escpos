import { __awaiter } from "tslib";
import { toPixelData } from 'html-to-image';
export class Image {
    constructor(pixels, width, height) {
        this.data = pixels;
        this.width = width;
        this.height = height;
    }
    load(dom) {
        return __awaiter(this, void 0, void 0, function* () {
            // const stream = await createStreamFromPath(path);
            return new Promise(resolve => {
                // stream.pipe(new PNG()).on("parsed", function (this: PNG) {
                //     const pixels = new Array<boolean>(this.width * this.height);
                //     for (let y = 0; y < this.height; y++) {
                //         for (let x = 0; x < this.width; x++) {
                //             // Get index 32bpp
                //             const idx = (this.width * y + x) * 4;
                //             let value = false;
                //             // Anything that is white-ish and has alpha > 128 is colored in, rest is blank.
                //             if (this.data[idx] < 0xE6 || this.data[idx + 1] < 0xE6 || this.data[idx + 2] < 0xE6) {
                //                 value = true;
                //             }
                //             if (value && this.data[idx + 3] <= 0x80) {
                //                 value = false;
                //             }
                //             pixels[this.width * y + x] = value;
                //         }
                //     }
                //     resolve(new Image(pixels, this.width, this.height));
                // });
                toPixelData(dom, { quality: 1, backgroundColor: "#ffffff" }).then(function (pixel) {
                    const pixels = new Array(dom.scrollWidth * dom.scrollHeight);
                    for (var y = 0; y < dom.scrollHeight; ++y) {
                        for (var x = 0; x < dom.scrollWidth; ++x) {
                            const idx = (4 * y * dom.scrollHeight) + (4 * x);
                            let value = false;
                            // Anything that is white-ish and has alpha > 128 is colored in, rest is blank.
                            if (this.data[idx] < 0xE6 || this.data[idx + 1] < 0xE6 || this.data[idx + 2] < 0xE6) {
                                value = true;
                            }
                            if (value && this.data[idx + 3] <= 0x80) {
                                value = false;
                            }
                            pixels[this.width * y + x] = value;
                            /* pixelAtXY is a Uint8Array[4] containing RGBA values of the pixel at (x, y) in the range 0..255 */
                        }
                    }
                    resolve(new Image(pixels, dom.scrollWidth, dom.scrollHeight));
                });
            });
        });
    }
    toRaster() {
        const n = Math.ceil(this.width / 8);
        const result = new Uint8Array(this.height * n);
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.data[y * this.width + x]) {
                    // tslint:disable-next-line no-bitwise
                    result[y * n + (x >> 3)] += (0x80 >> ((x % 8) & 0x7));
                }
            }
        }
        return {
            data: result,
            height: this.height,
            width: n
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92aC1lc2Nwb3Mvc3JjL2xpYi9lbmNvZGUvSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTSxPQUFPLEtBQUs7SUFrRGQsWUFBWSxNQUFpQixFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFyRFksSUFBSSxDQUFDLEdBQVE7O1lBQ3RCLG1EQUFtRDtZQUVuRCxPQUFPLElBQUksT0FBTyxDQUFRLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQyw2REFBNkQ7Z0JBQzdELG1FQUFtRTtnQkFDbkUsOENBQThDO2dCQUM5QyxpREFBaUQ7Z0JBQ2pELGlDQUFpQztnQkFDakMsb0RBQW9EO2dCQUNwRCxpQ0FBaUM7Z0JBQ2pDLDhGQUE4RjtnQkFDOUYscUdBQXFHO2dCQUNyRyxnQ0FBZ0M7Z0JBQ2hDLGdCQUFnQjtnQkFDaEIseURBQXlEO2dCQUN6RCxpQ0FBaUM7Z0JBQ2pDLGdCQUFnQjtnQkFDaEIsa0RBQWtEO2dCQUNsRCxZQUFZO2dCQUNaLFFBQVE7Z0JBQ1IsMkRBQTJEO2dCQUMzRCxNQUFNO2dCQUNOLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7b0JBQzdFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUU7NEJBQ3RDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQzs0QkFDbEIsK0VBQStFOzRCQUMvRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7Z0NBQ2pGLEtBQUssR0FBRyxJQUFJLENBQUM7NkJBQ2hCOzRCQUNELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtnQ0FDckMsS0FBSyxHQUFHLEtBQUssQ0FBQzs2QkFDakI7NEJBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzs0QkFDbkMsb0dBQW9HO3lCQUN2RztxQkFDSjtvQkFDRCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFZTSxRQUFRO1FBQ1gsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDL0Isc0NBQXNDO29CQUN0QyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekQ7YUFDSjtTQUNKO1FBRUQsT0FBTztZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztJQUNOLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvUGl4ZWxEYXRhIH0gZnJvbSAnaHRtbC10by1pbWFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2Uge1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWQoZG9tOiBhbnkpOiBQcm9taXNlPEltYWdlPiB7XHJcbiAgICAgICAgLy8gY29uc3Qgc3RyZWFtID0gYXdhaXQgY3JlYXRlU3RyZWFtRnJvbVBhdGgocGF0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJbWFnZT4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHN0cmVhbS5waXBlKG5ldyBQTkcoKSkub24oXCJwYXJzZWRcIiwgZnVuY3Rpb24gKHRoaXM6IFBORykge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgcGl4ZWxzID0gbmV3IEFycmF5PGJvb2xlYW4+KHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBHZXQgaW5kZXggMzJicHBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgaWR4ID0gKHRoaXMud2lkdGggKiB5ICsgeCkgKiA0O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gQW55dGhpbmcgdGhhdCBpcyB3aGl0ZS1pc2ggYW5kIGhhcyBhbHBoYSA+IDEyOCBpcyBjb2xvcmVkIGluLCByZXN0IGlzIGJsYW5rLlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2lkeF0gPCAweEU2IHx8IHRoaXMuZGF0YVtpZHggKyAxXSA8IDB4RTYgfHwgdGhpcy5kYXRhW2lkeCArIDJdIDwgMHhFNikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLmRhdGFbaWR4ICsgM10gPD0gMHg4MCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBwaXhlbHNbdGhpcy53aWR0aCAqIHkgKyB4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJlc29sdmUobmV3IEltYWdlKHBpeGVscywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIHRvUGl4ZWxEYXRhKGRvbSwgeyBxdWFsaXR5OiAxLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH0pLnRoZW4oZnVuY3Rpb24gKHBpeGVsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBuZXcgQXJyYXk8Ym9vbGVhbj4oZG9tLnNjcm9sbFdpZHRoICogZG9tLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGRvbS5zY3JvbGxIZWlnaHQ7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgZG9tLnNjcm9sbFdpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gKDQgKiB5ICogZG9tLnNjcm9sbEhlaWdodCkgKyAoNCAqIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW55dGhpbmcgdGhhdCBpcyB3aGl0ZS1pc2ggYW5kIGhhcyBhbHBoYSA+IDEyOCBpcyBjb2xvcmVkIGluLCByZXN0IGlzIGJsYW5rLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2lkeF0gPCAweEU2IHx8IHRoaXMuZGF0YVtpZHggKyAxXSA8IDB4RTYgfHwgdGhpcy5kYXRhW2lkeCArIDJdIDwgMHhFNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLmRhdGFbaWR4ICsgM10gPD0gMHg4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbHNbdGhpcy53aWR0aCAqIHkgKyB4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBwaXhlbEF0WFkgaXMgYSBVaW50OEFycmF5WzRdIGNvbnRhaW5pbmcgUkdCQSB2YWx1ZXMgb2YgdGhlIHBpeGVsIGF0ICh4LCB5KSBpbiB0aGUgcmFuZ2UgMC4uMjU1ICovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSW1hZ2UocGl4ZWxzLCBkb20uc2Nyb2xsV2lkdGgsIGRvbS5zY3JvbGxIZWlnaHQpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGF0YTogYm9vbGVhbltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBpeGVsczogYm9vbGVhbltdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHBpeGVscztcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvUmFzdGVyKCk6IElSYXN0ZXIge1xyXG4gICAgICAgIGNvbnN0IG4gPSBNYXRoLmNlaWwodGhpcy53aWR0aCAvIDgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHRoaXMuaGVpZ2h0ICogbik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVt5ICogdGhpcy53aWR0aCArIHhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbeSAqIG4gKyAoeCA+PiAzKV0gKz0gKDB4ODAgPj4gKCh4ICUgOCkgJiAweDcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJhc3RlciB7XHJcbiAgICBkYXRhOiBVaW50OEFycmF5O1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59Il19