// import { PrintBuilder } from './PrintBuilder';
import { PrintBuffer } from './PrintBuffer';
import _ from './commands';
import { styles } from './styles';
const ESC = 0x1b;
const GS = 0x1d;
export class EscBuilder {
    constructor() {
        this.encoder = new TextEncoder();
        this.size = 48;
    }
    init() {
        this.buffer = new PrintBuffer();
        this.write(ESC);
        this.write('@');
        return this;
    }
    flush() {
        return this.buffer.flush();
    }
    feed(lineCount = 1) {
        this.write(ESC);
        this.write('d');
        this.write(lineCount);
        return this;
    }
    cut(cutType = 'full') {
        this.write(GS);
        this.write('V');
        this.write(cutType === 'full' ? 1 : 0);
        return this;
    }
    writeLine(value) {
        return this.write(`${value}\n`);
    }
    drawLine() {
        let lineText = '';
        for (let i = 0; i < this.size; i++) {
            lineText += '-';
        }
        return this.write(`${lineText}\n`);
    }
    setPageSize(size) {
        this.size = size;
        return this;
    }
    writeTable(data) {
        let cellWidth = this.size / data.length;
        let lineTxt = '';
        for (let i = 0; i < data.length; i++) {
            lineTxt += data[i].toString();
            let spaces = cellWidth - data[i].toString().length;
            for (let j = 0; j < spaces; j++) {
                lineTxt += ' ';
            }
        }
        return this.write(`${lineTxt}\n`);
    }
    writeCustomTable(data, options) {
        options = options || { size: [] };
        options.size = options.size || [];
        let [width = 1, height = 1] = options.size || [];
        let baseWidth = Math.floor(this.size / width);
        let cellWidth = Math.floor(baseWidth / data.length);
        let leftoverSpace = baseWidth - cellWidth * data.length;
        let lineStr = '';
        let secondLineEnabled = false;
        let secondLine = [];
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            let align = (obj.align || '').toUpperCase();
            let tooLong = false;
            obj.text = obj.text.toString();
            let textLength = obj.text.length;
            if (obj.width) {
                cellWidth = baseWidth * obj.width;
            }
            else if (obj.cols) {
                cellWidth = obj.cols;
            }
            if (cellWidth < textLength) {
                tooLong = true;
                obj.originalText = obj.text;
                obj.text = obj.text.substring(0, cellWidth);
            }
            if (align === 'CENTER') {
                let spaces = (cellWidth - textLength) / 2;
                for (let s = 0; s < spaces; s++) {
                    lineStr += ' ';
                }
                if (obj.text !== '') {
                    if (obj.style) {
                        lineStr +=
                            styles(obj.style) + obj.text + styles('NORMAL');
                    }
                    else {
                        lineStr += obj.text;
                    }
                }
                for (let s = 0; s < spaces - 1; s++) {
                    lineStr += ' ';
                }
            }
            else if (align === 'RIGHT') {
                let spaces = cellWidth - textLength;
                if (leftoverSpace > 0) {
                    spaces += leftoverSpace;
                    leftoverSpace = 0;
                }
                for (let s = 0; s < spaces; s++) {
                    lineStr += ' ';
                }
                if (obj.text !== '') {
                    if (obj.style) {
                        lineStr +=
                            styles(obj.style) + obj.text + styles('NORMAL');
                    }
                    else {
                        lineStr += obj.text;
                    }
                }
            }
            else {
                if (obj.text !== '') {
                    if (obj.style) {
                        lineStr +=
                            styles(obj.style) + obj.text + styles('NORMAL');
                    }
                    else {
                        lineStr += obj.text;
                    }
                }
                let spaces = Math.floor(cellWidth - textLength);
                if (leftoverSpace > 0) {
                    spaces += leftoverSpace;
                    leftoverSpace = 0;
                }
                for (let s = 0; s < spaces; s++) {
                    lineStr += ' ';
                }
            }
            if (tooLong) {
                secondLineEnabled = true;
                obj.text = obj.originalText.substring(cellWidth);
                secondLine.push(obj);
            }
            else {
                obj.text = '';
                secondLine.push(obj);
            }
        }
        // Set size to line
        if (width > 1) {
            lineStr =
                _.TEXT_FORMAT.TXT_CUSTOM_SIZE(width, height) +
                    lineStr +
                    _.TEXT_FORMAT.TXT_NORMAL;
        }
        // Write the line
        this.write(`${lineStr}\n`);
        if (secondLineEnabled) {
            // Writes second line if has
            return this.writeCustomTable(secondLine, options);
        }
        else {
            if (options.feed) {
                this.feed(options.feed);
            }
            if (options.drawLine) {
                this.drawLine();
            }
            return this;
        }
    }
    setInverse(inverse = true) {
        this.write(GS);
        this.write('B');
        this.write(inverse ? 1 : 0);
        return this;
    }
    setUnderline(value = true) {
        this.write(ESC);
        this.write('-');
        this.write(value ? 1 : 0);
        return this;
    }
    setJustification(value = 'left') {
        let alignment;
        switch (value) {
            case 'center':
                alignment = 1;
                break;
            case 'right':
                alignment = 2;
                break;
            default:
                alignment = 0;
                break;
        }
        this.write(ESC);
        this.write('a');
        this.write(alignment);
        return this;
    }
    setBold(bold = true) {
        this.write(ESC);
        this.write('E');
        this.write(bold ? 1 : 0);
        return this;
    }
    /**
    @param mode 0, 0x30
    */
    setSize(size = 'normal') {
        this.write(ESC);
        this.write('!');
        this.write(size === 'normal' ? 0 : 0x30);
        return this;
    }
    write(value) {
        if (typeof value === 'number') {
            this.buffer.writeUInt8(value);
        }
        else if (typeof value === 'string') {
            this.buffer.write(this.encoder.encode(value));
        }
        else {
            this.buffer.write(value);
        }
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNjQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZoLWVzY3Bvcy9zcmMvbGliL2VuY29kZS9Fc2NCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUMzQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFaEIsTUFBTSxPQUFPLFVBQVU7SUFJbkI7UUFIUSxZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUloQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksQ0FBQyxZQUFvQixDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxHQUFHLENBQUMsVUFBa0IsTUFBTTtRQUN4QixJQUFJ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ZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFByaW50QnVpbGRlciB9IGZyb20gJy4vUHJpbnRCdWlsZGVyJztcbmltcG9ydCB7IFByaW50QnVmZmVyIH0gZnJvbSAnLi9QcmludEJ1ZmZlcic7XG5pbXBvcnQgXyBmcm9tICcuL2NvbW1hbmRzJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcbmRlY2xhcmUgdmFyIFRleHRFbmNvZGVyOiBhbnk7XG5jb25zdCBFU0MgPSAweDFiO1xuY29uc3QgR1MgPSAweDFkO1xuXG5leHBvcnQgY2xhc3MgRXNjQnVpbGRlciB7XG4gICAgcHJpdmF0ZSBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgcHJpdmF0ZSBidWZmZXI6IFByaW50QnVmZmVyO1xuICAgIHByaXZhdGUgc2l6ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNpemUgPSA0ODtcbiAgICB9XG5cbiAgICBpbml0KCk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBQcmludEJ1ZmZlcigpO1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoJ0AnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmx1c2goKTogVWludDhBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5mbHVzaCgpO1xuICAgIH1cblxuICAgIGZlZWQobGluZUNvdW50OiBudW1iZXIgPSAxKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZSgnZCcpO1xuICAgICAgICB0aGlzLndyaXRlKGxpbmVDb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGN1dChjdXRUeXBlOiBzdHJpbmcgPSAnZnVsbCcpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgdGhpcy53cml0ZShHUyk7XG4gICAgICAgIHRoaXMud3JpdGUoJ1YnKTtcbiAgICAgICAgdGhpcy53cml0ZShjdXRUeXBlID09PSAnZnVsbCcgPyAxIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd3JpdGVMaW5lKHZhbHVlOiBzdHJpbmcpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoYCR7dmFsdWV9XFxuYCk7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoKTogRXNjQnVpbGRlciB7XG4gICAgICAgIGxldCBsaW5lVGV4dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lVGV4dCArPSAnLSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoYCR7bGluZVRleHR9XFxuYCk7XG4gICAgfVxuXG4gICAgc2V0UGFnZVNpemUoc2l6ZTogbnVtYmVyKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdyaXRlVGFibGUoZGF0YTogYW55KTogRXNjQnVpbGRlciB7XG4gICAgICAgIGxldCBjZWxsV2lkdGggPSB0aGlzLnNpemUgLyBkYXRhLmxlbmd0aDtcbiAgICAgICAgbGV0IGxpbmVUeHQgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmVUeHQgKz0gZGF0YVtpXS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBsZXQgc3BhY2VzID0gY2VsbFdpZHRoIC0gZGF0YVtpXS50b1N0cmluZygpLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3BhY2VzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lVHh0ICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShgJHtsaW5lVHh0fVxcbmApO1xuICAgIH1cblxuICAgIHdyaXRlQ3VzdG9tVGFibGUoZGF0YTogYW55LCBvcHRpb25zOiBhbnkpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgeyBzaXplOiBbXSB9O1xuICAgICAgICBvcHRpb25zLnNpemUgPSBvcHRpb25zLnNpemUgfHwgW107XG4gICAgICAgIGxldCBbd2lkdGggPSAxLCBoZWlnaHQgPSAxXSA9IG9wdGlvbnMuc2l6ZSB8fCBbXTtcbiAgICAgICAgbGV0IGJhc2VXaWR0aCA9IE1hdGguZmxvb3IodGhpcy5zaXplIC8gd2lkdGgpO1xuICAgICAgICBsZXQgY2VsbFdpZHRoID0gTWF0aC5mbG9vcihiYXNlV2lkdGggLyBkYXRhLmxlbmd0aCk7XG4gICAgICAgIGxldCBsZWZ0b3ZlclNwYWNlID0gYmFzZVdpZHRoIC0gY2VsbFdpZHRoICogZGF0YS5sZW5ndGg7XG4gICAgICAgIGxldCBsaW5lU3RyID0gJyc7XG4gICAgICAgIGxldCBzZWNvbmRMaW5lRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Vjb25kTGluZSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IGRhdGFbaV07XG4gICAgICAgICAgICBsZXQgYWxpZ24gPSAob2JqLmFsaWduIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IHRvb0xvbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgb2JqLnRleHQgPSBvYmoudGV4dC50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IHRleHRMZW5ndGggPSBvYmoudGV4dC5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChvYmoud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjZWxsV2lkdGggPSBiYXNlV2lkdGggKiBvYmoud2lkdGg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9iai5jb2xzKSB7XG4gICAgICAgICAgICAgICAgY2VsbFdpZHRoID0gb2JqLmNvbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsV2lkdGggPCB0ZXh0TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9vTG9uZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgb2JqLm9yaWdpbmFsVGV4dCA9IG9iai50ZXh0O1xuICAgICAgICAgICAgICAgIG9iai50ZXh0ID0gb2JqLnRleHQuc3Vic3RyaW5nKDAsIGNlbGxXaWR0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGlnbiA9PT0gJ0NFTlRFUicpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2VzID0gKGNlbGxXaWR0aCAtIHRleHRMZW5ndGgpIC8gMjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IHNwYWNlczsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVTdHIgKz0gJyAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvYmoudGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0ciArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcyhvYmouc3R5bGUpICsgb2JqLnRleHQgKyBzdHlsZXMoJ05PUk1BTCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0ciArPSBvYmoudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc3BhY2VzIC0gMTsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVTdHIgKz0gJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdSSUdIVCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2VzID0gY2VsbFdpZHRoIC0gdGV4dExlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobGVmdG92ZXJTcGFjZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VzICs9IGxlZnRvdmVyU3BhY2U7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRvdmVyU3BhY2UgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc3BhY2VzOyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0ciArPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9iai50ZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3RyICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzKG9iai5zdHlsZSkgKyBvYmoudGV4dCArIHN0eWxlcygnTk9STUFMJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3RyICs9IG9iai50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLnRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHIgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMob2JqLnN0eWxlKSArIG9iai50ZXh0ICsgc3R5bGVzKCdOT1JNQUwnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHIgKz0gb2JqLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgc3BhY2VzID0gTWF0aC5mbG9vcihjZWxsV2lkdGggLSB0ZXh0TGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdG92ZXJTcGFjZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VzICs9IGxlZnRvdmVyU3BhY2U7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRvdmVyU3BhY2UgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc3BhY2VzOyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0ciArPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9vTG9uZykge1xuICAgICAgICAgICAgICAgIHNlY29uZExpbmVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvYmoudGV4dCA9IG9iai5vcmlnaW5hbFRleHQuc3Vic3RyaW5nKGNlbGxXaWR0aCk7XG4gICAgICAgICAgICAgICAgc2Vjb25kTGluZS5wdXNoKG9iaik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iai50ZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgc2Vjb25kTGluZS5wdXNoKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgc2l6ZSB0byBsaW5lXG4gICAgICAgIGlmICh3aWR0aCA+IDEpIHtcbiAgICAgICAgICAgIGxpbmVTdHIgPVxuICAgICAgICAgICAgICAgIF8uVEVYVF9GT1JNQVQuVFhUX0NVU1RPTV9TSVpFKHdpZHRoLCBoZWlnaHQpICtcbiAgICAgICAgICAgICAgICBsaW5lU3RyICtcbiAgICAgICAgICAgICAgICBfLlRFWFRfRk9STUFULlRYVF9OT1JNQUw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXcml0ZSB0aGUgbGluZVxuICAgICAgICB0aGlzLndyaXRlKGAke2xpbmVTdHJ9XFxuYCk7XG4gICAgICAgIGlmIChzZWNvbmRMaW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgLy8gV3JpdGVzIHNlY29uZCBsaW5lIGlmIGhhc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVDdXN0b21UYWJsZShzZWNvbmRMaW5lLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWQob3B0aW9ucy5mZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRyYXdMaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbnZlcnNlKGludmVyc2U6IGJvb2xlYW4gPSB0cnVlKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoR1MpO1xuICAgICAgICB0aGlzLndyaXRlKCdCJyk7XG4gICAgICAgIHRoaXMud3JpdGUoaW52ZXJzZSA/IDEgOiAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRVbmRlcmxpbmUodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZSgnLScpO1xuICAgICAgICB0aGlzLndyaXRlKHZhbHVlID8gMSA6IDApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRKdXN0aWZpY2F0aW9uKHZhbHVlOiBzdHJpbmcgPSAnbGVmdCcpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgbGV0IGFsaWdubWVudDtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICB0aGlzLndyaXRlKCdhJyk7XG4gICAgICAgIHRoaXMud3JpdGUoYWxpZ25tZW50KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRCb2xkKGJvbGQ6IGJvb2xlYW4gPSB0cnVlKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZSgnRScpO1xuICAgICAgICB0aGlzLndyaXRlKGJvbGQgPyAxIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgQHBhcmFtIG1vZGUgMCwgMHgzMFxuICAgICovXG4gICAgc2V0U2l6ZShzaXplOiBzdHJpbmcgPSAnbm9ybWFsJyk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoJyEnKTtcbiAgICAgICAgdGhpcy53cml0ZShzaXplID09PSAnbm9ybWFsJyA/IDAgOiAweDMwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHdyaXRlKHZhbHVlOiBzdHJpbmcgfCBVaW50OEFycmF5IHwgbnVtYmVyKTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlVUludDgodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlKHRoaXMuZW5jb2Rlci5lbmNvZGUodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=