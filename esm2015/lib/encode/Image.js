import { __awaiter } from "tslib";
import { toPixelData } from 'html-to-image';
export default class Image {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92aC1lc2Nwb3Mvc3JjL2xpYi9lbmNvZGUvSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTSxDQUFDLE9BQU8sT0FBTyxLQUFLO0lBa0R0QixZQUFZLE1BQWlCLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQXJEWSxJQUFJLENBQUMsR0FBUTs7WUFDdEIsbURBQW1EO1lBRW5ELE9BQU8sSUFBSSxPQUFPLENBQVEsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hDLDZEQUE2RDtnQkFDN0QsbUVBQW1FO2dCQUNuRSw4Q0FBOEM7Z0JBQzlDLGlEQUFpRDtnQkFDakQsaUNBQWlDO2dCQUNqQyxvREFBb0Q7Z0JBQ3BELGlDQUFpQztnQkFDakMsOEZBQThGO2dCQUM5RixxR0FBcUc7Z0JBQ3JHLGdDQUFnQztnQkFDaEMsZ0JBQWdCO2dCQUNoQix5REFBeUQ7Z0JBQ3pELGlDQUFpQztnQkFDakMsZ0JBQWdCO2dCQUNoQixrREFBa0Q7Z0JBQ2xELFlBQVk7Z0JBQ1osUUFBUTtnQkFDUiwyREFBMkQ7Z0JBQzNELE1BQU07Z0JBQ04sV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztvQkFDN0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQVUsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3RFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRTs0QkFDdEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDakQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDOzRCQUNsQiwrRUFBK0U7NEJBQy9FLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtnQ0FDakYsS0FBSyxHQUFHLElBQUksQ0FBQzs2QkFDaEI7NEJBQ0QsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dDQUNyQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzZCQUNqQjs0QkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDOzRCQUNuQyxvR0FBb0c7eUJBQ3ZHO3FCQUNKO29CQUNELE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQVlNLFFBQVE7UUFDWCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMvQixzQ0FBc0M7b0JBQ3RDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDthQUNKO1NBQ0o7UUFFRCxPQUFPO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDO0lBQ04sQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9QaXhlbERhdGEgfSBmcm9tICdodG1sLXRvLWltYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIHtcclxuICAgIHB1YmxpYyBhc3luYyBsb2FkKGRvbTogYW55KTogUHJvbWlzZTxJbWFnZT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IHN0cmVhbSA9IGF3YWl0IGNyZWF0ZVN0cmVhbUZyb21QYXRoKHBhdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SW1hZ2U+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAvLyBzdHJlYW0ucGlwZShuZXcgUE5HKCkpLm9uKFwicGFyc2VkXCIsIGZ1bmN0aW9uICh0aGlzOiBQTkcpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHBpeGVscyA9IG5ldyBBcnJheTxib29sZWFuPih0aGlzLndpZHRoICogdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gR2V0IGluZGV4IDMyYnBwXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IGlkeCA9ICh0aGlzLndpZHRoICogeSArIHgpICogNDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIEFueXRoaW5nIHRoYXQgaXMgd2hpdGUtaXNoIGFuZCBoYXMgYWxwaGEgPiAxMjggaXMgY29sb3JlZCBpbiwgcmVzdCBpcyBibGFuay5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpZHhdIDwgMHhFNiB8fCB0aGlzLmRhdGFbaWR4ICsgMV0gPCAweEU2IHx8IHRoaXMuZGF0YVtpZHggKyAyXSA8IDB4RTYpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5kYXRhW2lkeCArIDNdIDw9IDB4ODApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcGl4ZWxzW3RoaXMud2lkdGggKiB5ICsgeF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG5ldyBJbWFnZShwaXhlbHMsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB0b1BpeGVsRGF0YShkb20sIHsgcXVhbGl0eTogMSwgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIiB9KS50aGVuKGZ1bmN0aW9uIChwaXhlbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxzID0gbmV3IEFycmF5PGJvb2xlYW4+KGRvbS5zY3JvbGxXaWR0aCAqIGRvbS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkb20uc2Nyb2xsSGVpZ2h0OyArK3kpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGRvbS5zY3JvbGxXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9ICg0ICogeSAqIGRvbS5zY3JvbGxIZWlnaHQpICsgKDQgKiB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFueXRoaW5nIHRoYXQgaXMgd2hpdGUtaXNoIGFuZCBoYXMgYWxwaGEgPiAxMjggaXMgY29sb3JlZCBpbiwgcmVzdCBpcyBibGFuay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpZHhdIDwgMHhFNiB8fCB0aGlzLmRhdGFbaWR4ICsgMV0gPCAweEU2IHx8IHRoaXMuZGF0YVtpZHggKyAyXSA8IDB4RTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5kYXRhW2lkeCArIDNdIDw9IDB4ODApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxzW3RoaXMud2lkdGggKiB5ICsgeF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogcGl4ZWxBdFhZIGlzIGEgVWludDhBcnJheVs0XSBjb250YWluaW5nIFJHQkEgdmFsdWVzIG9mIHRoZSBwaXhlbCBhdCAoeCwgeSkgaW4gdGhlIHJhbmdlIDAuLjI1NSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEltYWdlKHBpeGVscywgZG9tLnNjcm9sbFdpZHRoLCBkb20uc2Nyb2xsSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRhdGE6IGJvb2xlYW5bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaXhlbHM6IGJvb2xlYW5bXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBwaXhlbHM7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1Jhc3RlcigpOiBJUmFzdGVyIHtcclxuICAgICAgICBjb25zdCBuID0gTWF0aC5jZWlsKHRoaXMud2lkdGggLyA4KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheSh0aGlzLmhlaWdodCAqIG4pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbeSAqIHRoaXMud2lkdGggKyB4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3kgKiBuICsgKHggPj4gMyldICs9ICgweDgwID4+ICgoeCAlIDgpICYgMHg3KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYXN0ZXIge1xyXG4gICAgZGF0YTogVWludDhBcnJheTtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufSJdfQ==