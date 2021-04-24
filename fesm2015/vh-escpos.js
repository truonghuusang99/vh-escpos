import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { __awaiter } from 'tslib';
import { toPixelData } from 'html-to-image';

// Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
class PrintBuffer {
    constructor(size = 1024) {
        this.buffer = new Uint8Array(size);
        this.size = 0;
    }
    clear() {
        this.size = 0;
    }
    flush() {
        const buffer = new Uint8Array(this.buffer.slice(0, this.size));
        this.size = 0;
        return buffer;
    }
    write(data) {
        this.resize(data.length);
        this.buffer.set(data, this.size);
        this.size += data.length;
        return this;
    }
    writeUInt8(value) {
        this.resize(1);
        this.buffer[this.size++] = value & 0xFF;
        return this;
    }
    writeUInt32LE(value, noAssert) {
        this.resize(4);
        // tslint:disable no-bitwise
        this.buffer[this.size++] = (value) & 0xFF;
        this.buffer[this.size++] = (value >> 8) & 0xFF;
        this.buffer[this.size++] = (value >> 16) & 0xFF;
        this.buffer[this.size++] = (value >> 24) & 0xFF;
        // tslint:enable no-bitwise
        return this;
    }
    writeUInt16LE(value, noAssert) {
        this.resize(2);
        // tslint:disable no-bitwise
        this.buffer[this.size++] = (value) & 0xFF;
        this.buffer[this.size++] = (value >> 8) & 0xFF;
        // tslint:enable no-bitwise
        return this;
    }
    resize(need) {
        const remaining = this.buffer.length - this.size;
        if (remaining < need) {
            const oldBuffer = this.buffer;
            const factor = Math.ceil((need - remaining) / oldBuffer.length) + 1;
            this.buffer = new Uint8Array(oldBuffer.length * factor);
            this.buffer.set(oldBuffer, 0);
        }
    }
}

/**
 * Utility function that converts numbers into hex values
 *
 * @usage:
 *   numToHex(256) => '0100'
 *   numToHex(0) => '00'
 */
let numToHexString = function (value) {
    value = +value;
    if (!isNaN(value)) {
        value = value.toString(16);
        while (value.length % 2 !== 0) {
            value = '0' + value;
        }
    }
    return value;
};
const ɵ0 = numToHexString;
/**
 * ESC/POS _ (Constants)
 */
let _ = {
    LF: '\x0a',
    FS: '\x1c',
    FF: '\x0c',
    GS: '\x1d',
    DLE: '\x10',
    EOT: '\x04',
    NUL: '\x00',
    ESC: '\x1b',
    TAB: '\x74',
    EOL: '\n'
};
/**
 * [FEED_CONTROL_SEQUENCES Feed control sequences]
 * @type {Object}
 */
_.FEED_CONTROL_SEQUENCES = {
    CTL_LF: '\x0a',
    CTL_GLF: '\x4a\x00',
    CTL_FF: '\x0c',
    CTL_CR: '\x0d',
    CTL_HT: '\x09',
    CTL_VT: '\x0b' // Vertical tab
};
_.CHARACTER_SPACING = {
    CS_DEFAULT: '\x1b\x20\x00',
    CS_SET: '\x1b\x20'
};
_.LINE_SPACING = {
    LS_DEFAULT: '\x1b\x32',
    LS_SET: '\x1b\x33'
};
/**
 * [HARDWARE Printer hardware]
 * @type {Object}
 */
_.HARDWARE = {
    HW_INIT: '\x1b\x40',
    HW_SELECT: '\x1b\x3d\x01',
    HW_RESET: '\x1b\x3f\x0a\x00' // Reset printer hardware
};
/**
 * [CASH_DRAWER Cash Drawer]
 * @type {Object}
 */
_.CASH_DRAWER = {
    CD_KICK_2: '\x1b\x70\x00\x19\xfa',
    CD_KICK_5: '\x1b\x70\x01\x19\xfa' // Sends a pulse to pin 5 []
};
/**
 * [MARGINS Margins sizes]
 * @type {Object}
 */
_.MARGINS = {
    BOTTOM: '\x1b\x4f',
    LEFT: '\x1b\x6c',
    RIGHT: '\x1b\x51' // Fix right size
};
/**
 * [PAPER Paper]
 * @type {Object}
 */
_.PAPER = {
    PAPER_FULL_CUT: '\x1d\x56\x00',
    PAPER_PART_CUT: '\x1d\x56\x01',
    PAPER_CUT_A: '\x1d\x56\x41',
    PAPER_CUT_B: '\x1d\x56\x42' // Partial cut paper
};
/**
 * [TEXT_FORMAT Text format]
 * @type {Object}
 */
_.TEXT_FORMAT = {
    TXT_NORMAL: '\x1b\x21\x00',
    TXT_2HEIGHT: '\x1b\x21\x10',
    TXT_2WIDTH: '\x1b\x21\x20',
    TXT_4SQUARE: '\x1b\x21\x30',
    TXT_CUSTOM_SIZE: function (width, height) {
        // other sizes
        let widthDec = (width - 1) * 16;
        let heightDec = height - 1;
        let sizeDec = widthDec + heightDec;
        return '\x1d\x21' + String.fromCharCode(sizeDec);
    },
    TXT_HEIGHT: {
        1: '\x00',
        2: '\x01',
        3: '\x02',
        4: '\x03',
        5: '\x04',
        6: '\x05',
        7: '\x06',
        8: '\x07'
    },
    TXT_WIDTH: {
        1: '\x00',
        2: '\x10',
        3: '\x20',
        4: '\x30',
        5: '\x40',
        6: '\x50',
        7: '\x60',
        8: '\x70'
    },
    TXT_UNDERL_OFF: '\x1b\x2d\x00',
    TXT_UNDERL_ON: '\x1b\x2d\x01',
    TXT_UNDERL2_ON: '\x1b\x2d\x02',
    TXT_BOLD_OFF: '\x1b\x45\x00',
    TXT_BOLD_ON: '\x1b\x45\x01',
    TXT_ITALIC_OFF: '\x1b\x35',
    TXT_ITALIC_ON: '\x1b\x34',
    TXT_FONT_A: '\x1b\x4d\x00',
    TXT_FONT_B: '\x1b\x4d\x01',
    TXT_FONT_C: '\x1b\x4d\x02',
    TXT_ALIGN_LT: '\x1b\x61\x00',
    TXT_ALIGN_CT: '\x1b\x61\x01',
    TXT_ALIGN_RT: '\x1b\x61\x02' // Right justification
};
/**
 * Qsprinter-compatible
 * Added by Attawit Kittikrairit
 * [MODEL Model-specific commands]
 * @type {Object}
 */
_.MODEL = {
    QSPRINTER: {
        BARCODE_MODE: {
            ON: '\x1d\x45\x43\x01',
            OFF: '\x1d\x45\x43\x00' // Barcode mode off
        },
        BARCODE_HEIGHT_DEFAULT: '\x1d\x68\xA2',
        CODE2D_FORMAT: {
            PIXEL_SIZE: {
                CMD: '\x1b\x23\x23\x51\x50\x49\x58',
                MIN: 1,
                MAX: 24,
                DEFAULT: 12
            },
            VERSION: {
                CMD: '\x1d\x28\x6b\x03\x00\x31\x43',
                MIN: 1,
                MAX: 16,
                DEFAULT: 3
            },
            LEVEL: {
                CMD: '\x1d\x28\x6b\x03\x00\x31\x45',
                OPTIONS: {
                    L: 48,
                    M: 49,
                    Q: 50,
                    H: 51
                }
            },
            LEN_OFFSET: 3,
            SAVEBUF: {
                // Format: CMD_P1{LEN_2BYTE}CMD_P2{DATA}
                // DATA Max Length: 256*256 - 3 (65533)
                CMD_P1: '\x1d\x28\x6b',
                CMD_P2: '\x31\x50\x30'
            },
            PRINTBUF: {
                // Format: CMD_P1{LEN_2BYTE}CMD_P2
                CMD_P1: '\x1d\x28\x6b',
                CMD_P2: '\x31\x51\x30'
            }
        }
    }
};
/**
 * [CODE2D_FORMAT description]
 * @type {Object}
 */
_.CODE2D_FORMAT = {
    TYPE_PDF417: _.GS + 'Z' + '\x00',
    TYPE_DATAMATRIX: _.GS + 'Z' + '\x01',
    TYPE_QR: _.GS + 'Z' + '\x02',
    CODE2D: _.ESC + 'Z',
    QR_LEVEL_L: 'L',
    QR_LEVEL_M: 'M',
    QR_LEVEL_Q: 'Q',
    QR_LEVEL_H: 'H' // correct level 30%
};
/**
 * [IMAGE_FORMAT Image format]
 * @type {Object}
 */
_.IMAGE_FORMAT = {
    S_RASTER_N: '\x1d\x76\x30\x00',
    S_RASTER_2W: '\x1d\x76\x30\x01',
    S_RASTER_2H: '\x1d\x76\x30\x02',
    S_RASTER_Q: '\x1d\x76\x30\x03' // Set raster image quadruple
};
/**
 * [BITMAP_FORMAT description]
 * @type {Object}
 */
_.BITMAP_FORMAT = {
    BITMAP_S8: '\x1b\x2a\x00',
    BITMAP_D8: '\x1b\x2a\x01',
    BITMAP_S24: '\x1b\x2a\x20',
    BITMAP_D24: '\x1b\x2a\x21'
};
/**
 * [GSV0_FORMAT description]
 * @type {Object}
 */
_.GSV0_FORMAT = {
    GSV0_NORMAL: '\x1d\x76\x30\x00',
    GSV0_DW: '\x1d\x76\x30\x01',
    GSV0_DH: '\x1d\x76\x30\x02',
    GSV0_DWDH: '\x1d\x76\x30\x03'
};
/**
 * [BEEP description]
 * @type {string}
 */
(_.BEEP = '\x1b\x42'), // Printer Buzzer pre hex
    /**
     * [COLOR description]
     * @type {Object}
     */
    (_.COLOR = {
        0: '\x1b\x72\x00',
        1: '\x1b\x72\x01',
        REVERSE: '\x1dB1',
        UNREVERSE: '\x1dB0' // Default: undo the reverse - black text on white background
    });
/**
 * [SCREEN description]
 * @type {Object}
 */
_.SCREEN = {
    BS: '\x08',
    HT: '\x09',
    LF: '\x0a',
    US_LF: '\x1f\x0a',
    HOM: '\x0b',
    CR: '\x0d',
    US_CR: '\x1f\x0d',
    US_B: '\x1f\x42',
    US_$: '\x1f\x24',
    CLR: '\x0c',
    CAN: '\x18',
    US_MD1: '\x1f\x01',
    US_MD2: '\x1f\x02',
    US_MD3: '\x1f\x03',
    US_C: '\x1f\x43',
    US_E: '\x1f\x45',
    US_T: '\x1f\x54',
    US_U: '\x1f\x55',
    US_X: '\x1f\x58',
    US_r: '\x1f\x72',
    US_v: '\x1f\x76' // Sets the DTR signal in the host interface to the MARK or SPACE state
};
var Underline;
(function (Underline) {
    Underline[Underline["NoUnderline"] = 0] = "NoUnderline";
    Underline[Underline["Single"] = 1] = "Single";
    Underline[Underline["Double"] = 2] = "Double";
})(Underline || (Underline = {}));
var Justification;
(function (Justification) {
    Justification[Justification["Left"] = 0] = "Left";
    Justification[Justification["Center"] = 1] = "Center";
    Justification[Justification["Right"] = 2] = "Right";
})(Justification || (Justification = {}));
var DrawerPin;
(function (DrawerPin) {
    DrawerPin[DrawerPin["Pin2"] = 0] = "Pin2";
    DrawerPin[DrawerPin["Pin5"] = 1] = "Pin5";
})(DrawerPin || (DrawerPin = {}));
var Font;
(function (Font) {
    Font[Font["A"] = 0] = "A";
    Font[Font["B"] = 1] = "B";
    Font[Font["C"] = 2] = "C";
})(Font || (Font = {}));
var Barcode;
(function (Barcode) {
    Barcode[Barcode["UPCA"] = 0] = "UPCA";
    Barcode[Barcode["UPCE"] = 1] = "UPCE";
    Barcode[Barcode["EAN13"] = 2] = "EAN13";
    Barcode[Barcode["EAN8"] = 3] = "EAN8";
    Barcode[Barcode["CODE39"] = 4] = "CODE39";
    Barcode[Barcode["ITF"] = 5] = "ITF";
    Barcode[Barcode["CODABAR"] = 6] = "CODABAR";
    Barcode[Barcode["CODE93"] = 7] = "CODE93";
    Barcode[Barcode["CODE128"] = 8] = "CODE128";
    Barcode[Barcode["UCC"] = 9] = "UCC";
    Barcode[Barcode["RSS14"] = 10] = "RSS14";
    Barcode[Barcode["RSS14Truncated"] = 11] = "RSS14Truncated";
    Barcode[Barcode["RSSLimited"] = 12] = "RSSLimited";
    Barcode[Barcode["RSSExpanded"] = 13] = "RSSExpanded";
})(Barcode || (Barcode = {}));
var Position;
(function (Position) {
    Position[Position["NotPrinted"] = 0] = "NotPrinted";
    Position[Position["Above"] = 1] = "Above";
    Position[Position["Below"] = 2] = "Below";
    Position[Position["Both"] = 3] = "Both";
})(Position || (Position = {}));
var Color;
(function (Color) {
    Color[Color["Color1"] = 0] = "Color1";
    Color[Color["Color2"] = 1] = "Color2";
})(Color || (Color = {}));
var TextMode;
(function (TextMode) {
    TextMode[TextMode["Normal"] = 0] = "Normal";
    TextMode[TextMode["DualHeight"] = 16] = "DualHeight";
    TextMode[TextMode["DualWidth"] = 32] = "DualWidth";
    TextMode[TextMode["DualWidthAndHeight"] = 48] = "DualWidthAndHeight";
})(TextMode || (TextMode = {}));
var RasterMode;
(function (RasterMode) {
    RasterMode[RasterMode["Normal"] = 0] = "Normal";
    RasterMode[RasterMode["DualWidth"] = 1] = "DualWidth";
    RasterMode[RasterMode["DualHeight"] = 2] = "DualHeight";
    RasterMode[RasterMode["DualWidthAndHeight"] = 3] = "DualWidthAndHeight";
})(RasterMode || (RasterMode = {}));
var Density;
(function (Density) {
    Density[Density["Single8Dot"] = 0] = "Single8Dot";
    Density[Density["Double8Dot"] = 1] = "Double8Dot";
    Density[Density["Single24Dot"] = 32] = "Single24Dot";
    Density[Density["Double24Dot"] = 33] = "Double24Dot";
})(Density || (Density = {}));
var CodeTable;
(function (CodeTable) {
    CodeTable[CodeTable["PC437"] = 0] = "PC437";
    CodeTable[CodeTable["Katakana"] = 1] = "Katakana";
    CodeTable[CodeTable["PC850"] = 2] = "PC850";
    CodeTable[CodeTable["PC860"] = 3] = "PC860";
    CodeTable[CodeTable["PC863"] = 4] = "PC863";
    CodeTable[CodeTable["PC865"] = 5] = "PC865";
    CodeTable[CodeTable["WPC1252"] = 16] = "WPC1252";
    CodeTable[CodeTable["PC866"] = 17] = "PC866";
    CodeTable[CodeTable["PC852"] = 18] = "PC852";
    CodeTable[CodeTable["PC858"] = 19] = "PC858";
    CodeTable[CodeTable["Thai42"] = 20] = "Thai42";
    CodeTable[CodeTable["Thai11"] = 21] = "Thai11";
    CodeTable[CodeTable["Thai13"] = 22] = "Thai13";
    CodeTable[CodeTable["Thai14"] = 23] = "Thai14";
    CodeTable[CodeTable["Thai16"] = 24] = "Thai16";
    CodeTable[CodeTable["Thai17"] = 25] = "Thai17";
    CodeTable[CodeTable["Thai18"] = 26] = "Thai18";
})(CodeTable || (CodeTable = {}));
var QRErrorCorrectLevel;
(function (QRErrorCorrectLevel) {
    QRErrorCorrectLevel[QRErrorCorrectLevel["L"] = 48] = "L";
    QRErrorCorrectLevel[QRErrorCorrectLevel["M"] = 49] = "M";
    QRErrorCorrectLevel[QRErrorCorrectLevel["Q"] = 50] = "Q";
    QRErrorCorrectLevel[QRErrorCorrectLevel["H"] = 51] = "H";
})(QRErrorCorrectLevel || (QRErrorCorrectLevel = {}));
var PDF417ErrorCorrectLevel;
(function (PDF417ErrorCorrectLevel) {
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level1"] = 48] = "Level1";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level2"] = 49] = "Level2";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level3"] = 50] = "Level3";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level4"] = 51] = "Level4";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level5"] = 52] = "Level5";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level6"] = 53] = "Level6";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level7"] = 54] = "Level7";
    PDF417ErrorCorrectLevel[PDF417ErrorCorrectLevel["Level8"] = 55] = "Level8";
})(PDF417ErrorCorrectLevel || (PDF417ErrorCorrectLevel = {}));
var PDF417Type;
(function (PDF417Type) {
    PDF417Type[PDF417Type["Standard"] = 0] = "Standard";
    PDF417Type[PDF417Type["Truncated"] = 1] = "Truncated";
})(PDF417Type || (PDF417Type = {}));

const styles = (type) => {
    let styled = '';
    switch (type.toUpperCase()) {
        case 'B':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
        case 'I':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
        case 'U':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'U2':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'BI':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
        case 'BIU':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'BIU2':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'BU':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'BU2':
            styled += _.TEXT_FORMAT.TXT_BOLD_ON;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'IU':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL_ON;
            break;
        case 'IU2':
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_ON;
            styled += _.TEXT_FORMAT.TXT_UNDERL2_ON;
            break;
        case 'NORMAL':
        default:
            styled += _.TEXT_FORMAT.TXT_BOLD_OFF;
            styled += _.TEXT_FORMAT.TXT_ITALIC_OFF;
            styled += _.TEXT_FORMAT.TXT_UNDERL_OFF;
            break;
    }
    return styled;
};

// import { PrintBuilder } from './PrintBuilder';
const ESC = 0x1b;
const GS = 0x1d;
class EscBuilder {
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
    raster(image, mode = RasterMode.Normal) {
        const header = new Uint8Array([GS, 0x76, 0x30, mode]);
        const raster = image.toRaster();
        this.write(header);
        this.write(raster.width, 16);
        this.write(raster.height, 16);
        this.write(raster.data);
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
    write(value, number = 8) {
        if (typeof value === 'number') {
            if (number == 8)
                this.buffer.writeUInt8(value);
            if (number == 16)
                this.buffer.writeUInt16LE(value);
            if (number == 32)
                this.buffer.writeUInt32LE(value);
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

class VhEscposService {
    constructor() { }
    /**
     * Initialize a new print queue
     */
    init() {
        this.builder = new EscBuilder();
        this.builder.init();
        return this;
    }
    /**
     *
     * @param cutType full|partial
     */
    cut(cutType = 'full') {
        this.builder.cut(cutType);
        return this;
    }
    /**
     *
     * @param lineCount How many lines to feed
     */
    feed(lineCount = 1) {
        this.builder.feed(lineCount);
        return this;
    }
    setInverse(value = true) {
        this.builder.setInverse(value);
        return this;
    }
    setBold(value = true) {
        this.builder.setBold(value);
        return this;
    }
    setUnderline(value = true) {
        this.builder.setUnderline(value);
        return this;
    }
    /**
     *
     * @param value left|center\right
     */
    setJustification(value = 'left') {
        this.builder.setJustification(value);
        return this;
    }
    /**
     *
     * @param value normal|large
     */
    setSize(value = 'normal') {
        this.builder.setSize(value);
        return this;
    }
    /**
     *
     * @param text
     */
    writeLine(text = '') {
        this.builder.writeLine(text);
        return this;
    }
    /**
     *
     *
     */
    drawLine() {
        this.builder.drawLine();
        return this;
    }
    /**
     *
     * @param data
     */
    writeTable(data) {
        this.builder.writeTable(data);
        return this;
    }
    /**
     *
     * @param size
     */
    setPageSize(size = 48) {
        this.builder.setPageSize(size);
        return this;
    }
    writeCustomTable(data, options = {}) {
        this.builder.writeCustomTable(data, options);
        return this;
    }
    image(image) {
        this.builder.raster(image);
        return this;
    }
    /**
     * write the current builder value to the driver and clear out the builder
     */
    flush() {
        return this.builder.flush();
    }
}
VhEscposService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VhEscposService_Factory() { return new VhEscposService(); }, token: VhEscposService, providedIn: "root" });
VhEscposService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
VhEscposService.ctorParameters = () => [];

class Image {
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

/*
 * Public API Surface of vh-escpos
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Image, VhEscposService };
//# sourceMappingURL=vh-escpos.js.map
