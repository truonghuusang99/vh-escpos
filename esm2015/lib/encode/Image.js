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
                            if (pixel[idx] < 0xE6 || pixel[idx + 1] < 0xE6 || pixel[idx + 2] < 0xE6) {
                                value = true;
                            }
                            if (value && pixel[idx + 3] <= 0x80) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92aC1lc2Nwb3Mvc3JjL2xpYi9lbmNvZGUvSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTSxPQUFPLEtBQUs7SUFrRGQsWUFBWSxNQUFpQixFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFyRFksSUFBSSxDQUFDLEdBQVE7O1lBQ3RCLG1EQUFtRDtZQUVuRCxPQUFPLElBQUksT0FBTyxDQUFRLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQyw2REFBNkQ7Z0JBQzdELG1FQUFtRTtnQkFDbkUsOENBQThDO2dCQUM5QyxpREFBaUQ7Z0JBQ2pELGlDQUFpQztnQkFDakMsb0RBQW9EO2dCQUNwRCxpQ0FBaUM7Z0JBQ2pDLDhGQUE4RjtnQkFDOUYscUdBQXFHO2dCQUNyRyxnQ0FBZ0M7Z0JBQ2hDLGdCQUFnQjtnQkFDaEIseURBQXlEO2dCQUN6RCxpQ0FBaUM7Z0JBQ2pDLGdCQUFnQjtnQkFDaEIsa0RBQWtEO2dCQUNsRCxZQUFZO2dCQUNaLFFBQVE7Z0JBQ1IsMkRBQTJEO2dCQUMzRCxNQUFNO2dCQUNOLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7b0JBQzdFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUU7NEJBQ3RDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQzs0QkFDbEIsK0VBQStFOzRCQUMvRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7Z0NBQ3JFLEtBQUssR0FBRyxJQUFJLENBQUM7NkJBQ2hCOzRCQUNELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dDQUNqQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzZCQUNqQjs0QkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDOzRCQUNuQyxvR0FBb0c7eUJBQ3ZHO3FCQUNKO29CQUNELE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQVlNLFFBQVE7UUFDWCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMvQixzQ0FBc0M7b0JBQ3RDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDthQUNKO1NBQ0o7UUFFRCxPQUFPO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDO0lBQ04sQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9QaXhlbERhdGEgfSBmcm9tICdodG1sLXRvLWltYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZSB7XHJcbiAgICBwdWJsaWMgYXN5bmMgbG9hZChkb206IGFueSk6IFByb21pc2U8SW1hZ2U+IHtcclxuICAgICAgICAvLyBjb25zdCBzdHJlYW0gPSBhd2FpdCBjcmVhdGVTdHJlYW1Gcm9tUGF0aChwYXRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEltYWdlPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgLy8gc3RyZWFtLnBpcGUobmV3IFBORygpKS5vbihcInBhcnNlZFwiLCBmdW5jdGlvbiAodGhpczogUE5HKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBwaXhlbHMgPSBuZXcgQXJyYXk8Ym9vbGVhbj4odGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIEdldCBpbmRleCAzMmJwcFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBpZHggPSAodGhpcy53aWR0aCAqIHkgKyB4KSAqIDQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBBbnl0aGluZyB0aGF0IGlzIHdoaXRlLWlzaCBhbmQgaGFzIGFscGhhID4gMTI4IGlzIGNvbG9yZWQgaW4sIHJlc3QgaXMgYmxhbmsuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbaWR4XSA8IDB4RTYgfHwgdGhpcy5kYXRhW2lkeCArIDFdIDwgMHhFNiB8fCB0aGlzLmRhdGFbaWR4ICsgMl0gPCAweEU2KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuZGF0YVtpZHggKyAzXSA8PSAweDgwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHBpeGVsc1t0aGlzLndpZHRoICogeSArIHhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgcmVzb2x2ZShuZXcgSW1hZ2UocGl4ZWxzLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgdG9QaXhlbERhdGEoZG9tLCB7IHF1YWxpdHk6IDEsIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfSkudGhlbihmdW5jdGlvbiAocGl4ZWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IG5ldyBBcnJheTxib29sZWFuPihkb20uc2Nyb2xsV2lkdGggKiBkb20uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgZG9tLnNjcm9sbEhlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBkb20uc2Nyb2xsV2lkdGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSAoNCAqIHkgKiBkb20uc2Nyb2xsSGVpZ2h0KSArICg0ICogeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbnl0aGluZyB0aGF0IGlzIHdoaXRlLWlzaCBhbmQgaGFzIGFscGhhID4gMTI4IGlzIGNvbG9yZWQgaW4sIHJlc3QgaXMgYmxhbmsuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaXhlbFtpZHhdIDwgMHhFNiB8fCBwaXhlbFtpZHggKyAxXSA8IDB4RTYgfHwgcGl4ZWxbaWR4ICsgMl0gPCAweEU2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHBpeGVsW2lkeCArIDNdIDw9IDB4ODApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxzW3RoaXMud2lkdGggKiB5ICsgeF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogcGl4ZWxBdFhZIGlzIGEgVWludDhBcnJheVs0XSBjb250YWluaW5nIFJHQkEgdmFsdWVzIG9mIHRoZSBwaXhlbCBhdCAoeCwgeSkgaW4gdGhlIHJhbmdlIDAuLjI1NSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEltYWdlKHBpeGVscywgZG9tLnNjcm9sbFdpZHRoLCBkb20uc2Nyb2xsSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRhdGE6IGJvb2xlYW5bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaXhlbHM6IGJvb2xlYW5bXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBwaXhlbHM7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1Jhc3RlcigpOiBJUmFzdGVyIHtcclxuICAgICAgICBjb25zdCBuID0gTWF0aC5jZWlsKHRoaXMud2lkdGggLyA4KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheSh0aGlzLmhlaWdodCAqIG4pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbeSAqIHRoaXMud2lkdGggKyB4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3kgKiBuICsgKHggPj4gMyldICs9ICgweDgwID4+ICgoeCAlIDgpICYgMHg3KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYXN0ZXIge1xyXG4gICAgZGF0YTogVWludDhBcnJheTtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufSJdfQ==