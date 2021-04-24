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
export var Underline;
(function (Underline) {
    Underline[Underline["NoUnderline"] = 0] = "NoUnderline";
    Underline[Underline["Single"] = 1] = "Single";
    Underline[Underline["Double"] = 2] = "Double";
})(Underline || (Underline = {}));
export var Justification;
(function (Justification) {
    Justification[Justification["Left"] = 0] = "Left";
    Justification[Justification["Center"] = 1] = "Center";
    Justification[Justification["Right"] = 2] = "Right";
})(Justification || (Justification = {}));
export var DrawerPin;
(function (DrawerPin) {
    DrawerPin[DrawerPin["Pin2"] = 0] = "Pin2";
    DrawerPin[DrawerPin["Pin5"] = 1] = "Pin5";
})(DrawerPin || (DrawerPin = {}));
export var Font;
(function (Font) {
    Font[Font["A"] = 0] = "A";
    Font[Font["B"] = 1] = "B";
    Font[Font["C"] = 2] = "C";
})(Font || (Font = {}));
export var Barcode;
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
export var Position;
(function (Position) {
    Position[Position["NotPrinted"] = 0] = "NotPrinted";
    Position[Position["Above"] = 1] = "Above";
    Position[Position["Below"] = 2] = "Below";
    Position[Position["Both"] = 3] = "Both";
})(Position || (Position = {}));
export var Color;
(function (Color) {
    Color[Color["Color1"] = 0] = "Color1";
    Color[Color["Color2"] = 1] = "Color2";
})(Color || (Color = {}));
export var TextMode;
(function (TextMode) {
    TextMode[TextMode["Normal"] = 0] = "Normal";
    TextMode[TextMode["DualHeight"] = 16] = "DualHeight";
    TextMode[TextMode["DualWidth"] = 32] = "DualWidth";
    TextMode[TextMode["DualWidthAndHeight"] = 48] = "DualWidthAndHeight";
})(TextMode || (TextMode = {}));
export var RasterMode;
(function (RasterMode) {
    RasterMode[RasterMode["Normal"] = 0] = "Normal";
    RasterMode[RasterMode["DualWidth"] = 1] = "DualWidth";
    RasterMode[RasterMode["DualHeight"] = 2] = "DualHeight";
    RasterMode[RasterMode["DualWidthAndHeight"] = 3] = "DualWidthAndHeight";
})(RasterMode || (RasterMode = {}));
export var Density;
(function (Density) {
    Density[Density["Single8Dot"] = 0] = "Single8Dot";
    Density[Density["Double8Dot"] = 1] = "Double8Dot";
    Density[Density["Single24Dot"] = 32] = "Single24Dot";
    Density[Density["Double24Dot"] = 33] = "Double24Dot";
})(Density || (Density = {}));
export var CodeTable;
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
export var QRErrorCorrectLevel;
(function (QRErrorCorrectLevel) {
    QRErrorCorrectLevel[QRErrorCorrectLevel["L"] = 48] = "L";
    QRErrorCorrectLevel[QRErrorCorrectLevel["M"] = 49] = "M";
    QRErrorCorrectLevel[QRErrorCorrectLevel["Q"] = 50] = "Q";
    QRErrorCorrectLevel[QRErrorCorrectLevel["H"] = 51] = "H";
})(QRErrorCorrectLevel || (QRErrorCorrectLevel = {}));
export var PDF417ErrorCorrectLevel;
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
export var PDF417Type;
(function (PDF417Type) {
    PDF417Type[PDF417Type["Standard"] = 0] = "Standard";
    PDF417Type[PDF417Type["Truncated"] = 1] = "Truncated";
})(PDF417Type || (PDF417Type = {}));
/**
 * [exports description]
 * @type {[type]}
 */
export default _;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92aC1lc2Nwb3Mvc3JjL2xpYi9lbmNvZGUvY29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBUyxLQUFVO0lBQ3RDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDOztBQUVGOztHQUVHO0FBQ0gsSUFBSSxDQUFDLEdBQVE7SUFDWCxFQUFFLEVBQUUsTUFBTTtJQUNWLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsSUFBSTtDQUNWLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxDQUFDLENBQUMsc0JBQXNCLEdBQUc7SUFDekIsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsVUFBVTtJQUNuQixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTSxDQUFDLGVBQWU7Q0FDL0IsQ0FBQztBQUVGLENBQUMsQ0FBQyxpQkFBaUIsR0FBRztJ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LGlEQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsZ0RBQVksQ0FBQTtJQUNaLDRDQUFLLENBQUE7SUFDTCw0Q0FBSyxDQUFBO0lBQ0wsNENBQUssQ0FBQTtJQUNMLDhDQUFNLENBQUE7SUFDTiw4Q0FBTSxDQUFBO0lBQ04sOENBQU0sQ0FBQTtJQUNOLDhDQUFNLENBQUE7SUFDTiw4Q0FBTSxDQUFBO0lBQ04sOENBQU0sQ0FBQTtJQUNOLDhDQUFNLENBQUE7QUFDUixDQUFDLEVBbEJXLFNBQVMsS0FBVCxTQUFTLFFBa0JwQjtBQUVELE1BQU0sQ0FBTixJQUFZLG1CQUtYO0FBTEQsV0FBWSxtQkFBbUI7SUFDN0Isd0RBQU0sQ0FBQTtJQUNOLHdEQUFDLENBQUE7SUFDRCx3REFBQyxDQUFBO0lBQ0Qsd0RBQUMsQ0FBQTtBQUNILENBQUMsRUFMVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSzlCO0FBRUQsTUFBTSxDQUFOLElBQVksdUJBU1g7QUFURCxXQUFZLHVCQUF1QjtJQUNqQywwRUFBVyxDQUFBO0lBQ1gsMEVBQU0sQ0FBQTtJQUNOLDBFQUFNLENBQUE7SUFDTiwwRUFBTSxDQUFBO0lBQ04sMEVBQU0sQ0FBQTtJQUNOLDBFQUFNLENBQUE7SUFDTiwwRUFBTSxDQUFBO0lBQ04sMEVBQU0sQ0FBQTtBQUNSLENBQUMsRUFUVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBU2xDO0FBRUQsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1oscURBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjtBQUVEOzs7R0FHRztBQUNILGVBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRoYXQgY29udmVydHMgbnVtYmVycyBpbnRvIGhleCB2YWx1ZXNcbiAqXG4gKiBAdXNhZ2U6XG4gKiAgIG51bVRvSGV4KDI1NikgPT4gJzAxMDAnXG4gKiAgIG51bVRvSGV4KDApID0+ICcwMCdcbiAqL1xubGV0IG51bVRvSGV4U3RyaW5nID0gZnVuY3Rpb24odmFsdWU6IGFueSkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBFU0MvUE9TIF8gKENvbnN0YW50cylcbiAqL1xubGV0IF86IGFueSA9IHtcbiAgTEY6ICdcXHgwYScsXG4gIEZTOiAnXFx4MWMnLFxuICBGRjogJ1xceDBjJyxcbiAgR1M6ICdcXHgxZCcsXG4gIERMRTogJ1xceDEwJyxcbiAgRU9UOiAnXFx4MDQnLFxuICBOVUw6ICdcXHgwMCcsXG4gIEVTQzogJ1xceDFiJyxcbiAgVEFCOiAnXFx4NzQnLFxuICBFT0w6ICdcXG4nXG59O1xuXG4vKipcbiAqIFtGRUVEX0NPTlRST0xfU0VRVUVOQ0VTIEZlZWQgY29udHJvbCBzZXF1ZW5jZXNdXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5fLkZFRURfQ09OVFJPTF9TRVFVRU5DRVMgPSB7XG4gIENUTF9MRjogJ1xceDBhJywgLy8gUHJpbnQgYW5kIGxpbmUgZmVlZFxuICBDVExfR0xGOiAnXFx4NGFcXHgwMCcsIC8vIFByaW50IGFuZCBmZWVkIHBhcGVyICh3aXRob3V0IHNwYWNlcyBiZXR3ZWVuIGxpbmVzKVxuICBDVExfRkY6ICdcXHgwYycsIC8vIEZvcm0gZmVlZFxuICBDVExfQ1I6ICdcXHgwZCcsIC8vIENhcnJpYWdlIHJldHVyblxuICBDVExfSFQ6ICdcXHgwOScsIC8vIEhvcml6b250YWwgdGFiXG4gIENUTF9WVDogJ1xceDBiJyAvLyBWZXJ0aWNhbCB0YWJcbn07XG5cbl8uQ0hBUkFDVEVSX1NQQUNJTkcgPSB7XG4gIENTX0RFRkFVTFQ6ICdcXHgxYlxceDIwXFx4MDAnLFxuICBDU19TRVQ6ICdcXHgxYlxceDIwJ1xufTtcblxuXy5MSU5FX1NQQUNJTkcgPSB7XG4gIExTX0RFRkFVTFQ6ICdcXHgxYlxceDMyJyxcbiAgTFNfU0VUOiAnXFx4MWJcXHgzMydcbn07XG5cbi8qKlxuICogW0hBUkRXQVJFIFByaW50ZXIgaGFyZHdhcmVdXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5fLkhBUkRXQVJFID0ge1xuICBIV19JTklUOiAnXFx4MWJcXHg0MCcsIC8vIENsZWFyIGRhdGEgaW4gYnVmZmVyIGFuZCByZXNldCBtb2Rlc1xuICBIV19TRUxFQ1Q6ICdcXHgxYlxceDNkXFx4MDEnLCAvLyBQcmludGVyIHNlbGVjdFxuICBIV19SRVNFVDogJ1xceDFiXFx4M2ZcXHgwYVxceDAwJyAvLyBSZXNldCBwcmludGVyIGhhcmR3YXJlXG59O1xuXG4vKipcbiAqIFtDQVNIX0RSQVdFUiBDYXNoIERyYXdlcl1cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbl8uQ0FTSF9EUkFXRVIgPSB7XG4gIENEX0tJQ0tfMjogJ1xceDFiXFx4NzBcXHgwMFxceDE5XFx4ZmEnLCAvLyBTZW5kcyBhIHB1bHNlIHRvIHBpbiAyIFtdXG4gIENEX0tJQ0tfNTogJ1xceDFiXFx4NzBcXHgwMVxceDE5XFx4ZmEnIC8vIFNlbmRzIGEgcHVsc2UgdG8gcGluIDUgW11cbn07XG5cbi8qKlxuICogW01BUkdJTlMgTWFyZ2lucyBzaXplc11cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbl8uTUFSR0lOUyA9IHtcbiAgQk9UVE9NOiAnXFx4MWJcXHg0ZicsIC8vIEZpeCBib3R0b20gc2l6ZVxuICBMRUZUOiAnXFx4MWJcXHg2YycsIC8vIEZpeCBsZWZ0IHNpemVcbiAgUklHSFQ6ICdcXHgxYlxceDUxJyAvLyBGaXggcmlnaHQgc2l6ZVxufTtcblxuLyoqXG4gKiBbUEFQRVIgUGFwZXJdXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5fLlBBUEVSID0ge1xuICBQQVBFUl9GVUxMX0NVVDogJ1xceDFkXFx4NTZcXHgwMCcsIC8vIEZ1bGwgY3V0IHBhcGVyXG4gIFBBUEVSX1BBUlRfQ1VUOiAnXFx4MWRcXHg1NlxceDAxJywgLy8gUGFydGlhbCBjdXQgcGFwZXJcbiAgUEFQRVJfQ1VUX0E6ICdcXHgxZFxceDU2XFx4NDEnLCAvLyBQYXJ0aWFsIGN1dCBwYXBlclxuICBQQVBFUl9DVVRfQjogJ1xceDFkXFx4NTZcXHg0MicgLy8gUGFydGlhbCBjdXQgcGFwZXJcbn07XG5cbi8qKlxuICogW1RFWFRfRk9STUFUIFRleHQgZm9ybWF0XVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXy5URVhUX0ZPUk1BVCA9IHtcbiAgVFhUX05PUk1BTDogJ1xceDFiXFx4MjFcXHgwMCcsIC8vIE5vcm1hbCB0ZXh0XG4gIFRYVF8ySEVJR0hUOiAnXFx4MWJcXHgyMVxceDEwJywgLy8gRG91YmxlIGhlaWdodCB0ZXh0XG4gIFRYVF8yV0lEVEg6ICdcXHgxYlxceDIxXFx4MjAnLCAvLyBEb3VibGUgd2lkdGggdGV4dFxuICBUWFRfNFNRVUFSRTogJ1xceDFiXFx4MjFcXHgzMCcsIC8vIERvdWJsZSB3aWR0aCAmIGhlaWdodCB0ZXh0XG5cbiAgVFhUX0NVU1RPTV9TSVpFOiBmdW5jdGlvbih3aWR0aDogYW55LCBoZWlnaHQ6IGFueSkge1xuICAgIC8vIG90aGVyIHNpemVzXG4gICAgbGV0IHdpZHRoRGVjID0gKHdpZHRoIC0gMSkgKiAxNjtcbiAgICBsZXQgaGVpZ2h0RGVjID0gaGVpZ2h0IC0gMTtcbiAgICBsZXQgc2l6ZURlYyA9IHdpZHRoRGVjICsgaGVpZ2h0RGVjO1xuICAgIHJldHVybiAnXFx4MWRcXHgyMScgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHNpemVEZWMpO1xuICB9LFxuXG4gIFRYVF9IRUlHSFQ6IHtcbiAgICAxOiAnXFx4MDAnLFxuICAgIDI6ICdcXHgwMScsXG4gICAgMzogJ1xceDAyJyxcbiAgICA0OiAnXFx4MDMnLFxuICAgIDU6ICdcXHgwNCcsXG4gICAgNjogJ1xceDA1JyxcbiAgICA3OiAnXFx4MDYnLFxuICAgIDg6ICdcXHgwNydcbiAgfSxcbiAgVFhUX1dJRFRIOiB7XG4gICAgMTogJ1xceDAwJyxcbiAgICAyOiAnXFx4MTAnLFxuICAgIDM6ICdcXHgyMCcsXG4gICAgNDogJ1xceDMwJyxcbiAgICA1OiAnXFx4NDAnLFxuICAgIDY6ICdcXHg1MCcsXG4gICAgNzogJ1xceDYwJyxcbiAgICA4OiAnXFx4NzAnXG4gIH0sXG5cbiAgVFhUX1VOREVSTF9PRkY6ICdcXHgxYlxceDJkXFx4MDAnLCAvLyBVbmRlcmxpbmUgZm9udCBPRkZcbiAgVFhUX1VOREVSTF9PTjogJ1xceDFiXFx4MmRcXHgwMScsIC8vIFVuZGVybGluZSBmb250IDEtZG90IE9OXG4gIFRYVF9VTkRFUkwyX09OOiAnXFx4MWJcXHgyZFxceDAyJywgLy8gVW5kZXJsaW5lIGZvbnQgMi1kb3QgT05cbiAgVFhUX0JPTERfT0ZGOiAnXFx4MWJcXHg0NVxceDAwJywgLy8gQm9sZCBmb250IE9GRlxuICBUWFRfQk9MRF9PTjogJ1xceDFiXFx4NDVcXHgwMScsIC8vIEJvbGQgZm9udCBPTlxuICBUWFRfSVRBTElDX09GRjogJ1xceDFiXFx4MzUnLCAvLyBJdGFsaWMgZm9udCBPTlxuICBUWFRfSVRBTElDX09OOiAnXFx4MWJcXHgzNCcsIC8vIEl0YWxpYyBmb250IE9OXG5cbiAgVFhUX0ZPTlRfQTogJ1xceDFiXFx4NGRcXHgwMCcsIC8vIEZvbnQgdHlwZSBBXG4gIFRYVF9GT05UX0I6ICdcXHgxYlxceDRkXFx4MDEnLCAvLyBGb250IHR5cGUgQlxuICBUWFRfRk9OVF9DOiAnXFx4MWJcXHg0ZFxceDAyJywgLy8gRm9udCB0eXBlIENcblxuICBUWFRfQUxJR05fTFQ6ICdcXHgxYlxceDYxXFx4MDAnLCAvLyBMZWZ0IGp1c3RpZmljYXRpb25cbiAgVFhUX0FMSUdOX0NUOiAnXFx4MWJcXHg2MVxceDAxJywgLy8gQ2VudGVyaW5nXG4gIFRYVF9BTElHTl9SVDogJ1xceDFiXFx4NjFcXHgwMicgLy8gUmlnaHQganVzdGlmaWNhdGlvblxufTtcblxuLyoqXG4gKiBRc3ByaW50ZXItY29tcGF0aWJsZVxuICogQWRkZWQgYnkgQXR0YXdpdCBLaXR0aWtyYWlyaXRcbiAqIFtNT0RFTCBNb2RlbC1zcGVjaWZpYyBjb21tYW5kc11cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbl8uTU9ERUwgPSB7XG4gIFFTUFJJTlRFUjoge1xuICAgIEJBUkNPREVfTU9ERToge1xuICAgICAgT046ICdcXHgxZFxceDQ1XFx4NDNcXHgwMScsIC8vIEJhcmNvZGUgbW9kZSBvblxuICAgICAgT0ZGOiAnXFx4MWRcXHg0NVxceDQzXFx4MDAnIC8vIEJhcmNvZGUgbW9kZSBvZmZcbiAgICB9LFxuICAgIEJBUkNPREVfSEVJR0hUX0RFRkFVTFQ6ICdcXHgxZFxceDY4XFx4QTInLCAvLyBCYXJjb2RlIGhlaWdodCBkZWZhdWx0OjE2MlxuICAgIENPREUyRF9GT1JNQVQ6IHtcbiAgICAgIFBJWEVMX1NJWkU6IHtcbiAgICAgICAgQ01EOiAnXFx4MWJcXHgyM1xceDIzXFx4NTFcXHg1MFxceDQ5XFx4NTgnLFxuICAgICAgICBNSU46IDEsXG4gICAgICAgIE1BWDogMjQsXG4gICAgICAgIERFRkFVTFQ6IDEyXG4gICAgICB9LFxuICAgICAgVkVSU0lPTjoge1xuICAgICAgICBDTUQ6ICdcXHgxZFxceDI4XFx4NmJcXHgwM1xceDAwXFx4MzFcXHg0MycsXG4gICAgICAgIE1JTjogMSxcbiAgICAgICAgTUFYOiAxNixcbiAgICAgICAgREVGQVVMVDogM1xuICAgICAgfSxcbiAgICAgIExFVkVMOiB7XG4gICAgICAgIENNRDogJ1xceDFkXFx4MjhcXHg2YlxceDAzXFx4MDBcXHgzMVxceDQ1JyxcbiAgICAgICAgT1BUSU9OUzoge1xuICAgICAgICAgIEw6IDQ4LFxuICAgICAgICAgIE06IDQ5LFxuICAgICAgICAgIFE6IDUwLFxuICAgICAgICAgIEg6IDUxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBMRU5fT0ZGU0VUOiAzLFxuICAgICAgU0FWRUJVRjoge1xuICAgICAgICAvLyBGb3JtYXQ6IENNRF9QMXtMRU5fMkJZVEV9Q01EX1Aye0RBVEF9XG4gICAgICAgIC8vIERBVEEgTWF4IExlbmd0aDogMjU2KjI1NiAtIDMgKDY1NTMzKVxuICAgICAgICBDTURfUDE6ICdcXHgxZFxceDI4XFx4NmInLFxuICAgICAgICBDTURfUDI6ICdcXHgzMVxceDUwXFx4MzAnXG4gICAgICB9LFxuICAgICAgUFJJTlRCVUY6IHtcbiAgICAgICAgLy8gRm9ybWF0OiBDTURfUDF7TEVOXzJCWVRFfUNNRF9QMlxuICAgICAgICBDTURfUDE6ICdcXHgxZFxceDI4XFx4NmInLFxuICAgICAgICBDTURfUDI6ICdcXHgzMVxceDUxXFx4MzAnXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBbQ09ERTJEX0ZPUk1BVCBkZXNjcmlwdGlvbl1cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbl8uQ09ERTJEX0ZPUk1BVCA9IHtcbiAgVFlQRV9QREY0MTc6IF8uR1MgKyAnWicgKyAnXFx4MDAnLFxuICBUWVBFX0RBVEFNQVRSSVg6IF8uR1MgKyAnWicgKyAnXFx4MDEnLFxuICBUWVBFX1FSOiBfLkdTICsgJ1onICsgJ1xceDAyJyxcbiAgQ09ERTJEOiBfLkVTQyArICdaJyxcbiAgUVJfTEVWRUxfTDogJ0wnLCAvLyBjb3JyZWN0IGxldmVsIDclXG4gIFFSX0xFVkVMX006ICdNJywgLy8gY29ycmVjdCBsZXZlbCAxNSVcbiAgUVJfTEVWRUxfUTogJ1EnLCAvLyBjb3JyZWN0IGxldmVsIDI1JVxuICBRUl9MRVZFTF9IOiAnSCcgLy8gY29ycmVjdCBsZXZlbCAzMCVcbn07XG5cbi8qKlxuICogW0lNQUdFX0ZPUk1BVCBJbWFnZSBmb3JtYXRdXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5fLklNQUdFX0ZPUk1BVCA9IHtcbiAgU19SQVNURVJfTjogJ1xceDFkXFx4NzZcXHgzMFxceDAwJywgLy8gU2V0IHJhc3RlciBpbWFnZSBub3JtYWwgc2l6ZVxuICBTX1JBU1RFUl8yVzogJ1xceDFkXFx4NzZcXHgzMFxceDAxJywgLy8gU2V0IHJhc3RlciBpbWFnZSBkb3VibGUgd2lkdGhcbiAgU19SQVNURVJfMkg6ICdcXHgxZFxceDc2XFx4MzBcXHgwMicsIC8vIFNldCByYXN0ZXIgaW1hZ2UgZG91YmxlIGhlaWdodFxuICBTX1JBU1RFUl9ROiAnXFx4MWRcXHg3NlxceDMwXFx4MDMnIC8vIFNldCByYXN0ZXIgaW1hZ2UgcXVhZHJ1cGxlXG59O1xuXG4vKipcbiAqIFtCSVRNQVBfRk9STUFUIGRlc2NyaXB0aW9uXVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXy5CSVRNQVBfRk9STUFUID0ge1xuICBCSVRNQVBfUzg6ICdcXHgxYlxceDJhXFx4MDAnLFxuICBCSVRNQVBfRDg6ICdcXHgxYlxceDJhXFx4MDEnLFxuICBCSVRNQVBfUzI0OiAnXFx4MWJcXHgyYVxceDIwJyxcbiAgQklUTUFQX0QyNDogJ1xceDFiXFx4MmFcXHgyMSdcbn07XG5cbi8qKlxuICogW0dTVjBfRk9STUFUIGRlc2NyaXB0aW9uXVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXy5HU1YwX0ZPUk1BVCA9IHtcbiAgR1NWMF9OT1JNQUw6ICdcXHgxZFxceDc2XFx4MzBcXHgwMCcsXG4gIEdTVjBfRFc6ICdcXHgxZFxceDc2XFx4MzBcXHgwMScsXG4gIEdTVjBfREg6ICdcXHgxZFxceDc2XFx4MzBcXHgwMicsXG4gIEdTVjBfRFdESDogJ1xceDFkXFx4NzZcXHgzMFxceDAzJ1xufTtcblxuLyoqXG4gKiBbQkVFUCBkZXNjcmlwdGlvbl1cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbihfLkJFRVAgPSAnXFx4MWJcXHg0MicpLCAvLyBQcmludGVyIEJ1enplciBwcmUgaGV4XG4gIC8qKlxuICAgKiBbQ09MT1IgZGVzY3JpcHRpb25dXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICAoXy5DT0xPUiA9IHtcbiAgICAwOiAnXFx4MWJcXHg3MlxceDAwJywgLy8gYmxhY2tcbiAgICAxOiAnXFx4MWJcXHg3MlxceDAxJywgLy8gcmVkXG4gICAgUkVWRVJTRTogJ1xceDFkQjEnLCAvLyBSZXZlcnNlcyB0aGUgY29sb3JzIC0gd2hpdGUgdGV4dCBvbiBibGFjayBiYWNrZ3JvdW5kXG4gICAgVU5SRVZFUlNFOiAnXFx4MWRCMCcgLy8gRGVmYXVsdDogdW5kbyB0aGUgcmV2ZXJzZSAtIGJsYWNrIHRleHQgb24gd2hpdGUgYmFja2dyb3VuZFxuICB9KTtcblxuLyoqXG4gKiBbU0NSRUVOIGRlc2NyaXB0aW9uXVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXy5TQ1JFRU4gPSB7XG4gIEJTOiAnXFx4MDgnLCAvLyBNb3ZlcyB0aGUgY3Vyc29yIG9uZSBjaGFyYWN0ZXIgcG9zaXRpb24gdG8gdGhlIGxlZnRcbiAgSFQ6ICdcXHgwOScsIC8vIE1vdmVzIHRoZSBjdXJzb3Igb25lIGNoYXJhY3RlciBwb3NpdGlvbiB0byB0aGUgcmlnaHRcbiAgTEY6ICdcXHgwYScsIC8vIE1vdmVzIHRoZSBjdXJzb3IgZG93biBvbmUgbGluZVxuICBVU19MRjogJ1xceDFmXFx4MGEnLCAvLyBNb3ZlcyB0aGUgY3Vyc29yIHVwIG9uZSBsaW5lXG4gIEhPTTogJ1xceDBiJywgLy8gTW92ZXMgdGhlIGN1cnNvciB0byB0aGUgbGVmdC1tb3N0IHBvc2l0aW9uIG9uIHRoZSB1cHBlciBsaW5lIChob21lIHBvc2l0aW9uKVxuICBDUjogJ1xceDBkJywgLy8gTW92ZXMgdGhlIGN1cnNvciB0byB0aGUgbGVmdC1tb3N0IHBvc2l0aW9uIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgVVNfQ1I6ICdcXHgxZlxceDBkJywgLy8gTW92ZXMgdGhlIGN1cnNvciB0byB0aGUgcmlnaHQtbW9zdCBwb3NpdGlvbiBvbiB0aGUgY3VycmVudCBsaW5lXG4gIFVTX0I6ICdcXHgxZlxceDQyJywgLy8gTW92ZXMgdGhlIGN1cnNvciB0byB0aGUgYm90dG9tIHBvc2l0aW9uXG4gIFVTXyQ6ICdcXHgxZlxceDI0JywgLy8gTW92ZXMgdGhlIGN1cnNvciB0byB0aGUgbnRoIHBvc2l0aW9uIG9uIHRoZSBtdGggbGluZVxuICBDTFI6ICdcXHgwYycsIC8vIENsZWFycyBhbGwgZGlzcGxheWVkIGNoYXJhY3RlcnNcbiAgQ0FOOiAnXFx4MTgnLCAvLyBDbGVhcnMgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgY3Vyc29yXG4gIFVTX01EMTogJ1xceDFmXFx4MDEnLCAvLyBTZWxlY3RzIG92ZXJ3cml0ZSBtb2RlIGFzIHRoZSBzY3JlZW4gZGlzcGxheSBtb2RlXG4gIFVTX01EMjogJ1xceDFmXFx4MDInLCAvLyBTZWxlY3RzIHZlcnRpY2FsIHNjcm9sbCBtb2RlIGFzIHRoZSBzY3JlZW4gZGlzcGxheSBtb2RlXG4gIFVTX01EMzogJ1xceDFmXFx4MDMnLCAvLyBTZWxlY3RzIGhvcml6b250YWwgc2Nyb2xsIG1vZGUgYXMgdGhlIGRpc3BsYXkgc2NyZWVuIG1vZGVcbiAgVVNfQzogJ1xceDFmXFx4NDMnLCAvLyBUdXJuIGN1cnNvciBkaXNwbGF5IG1vZGUgb24vb2ZmXG4gIFVTX0U6ICdcXHgxZlxceDQ1JywgLy8gU2V0cyBvciBjYW5jZWxzIHRoZSBibGluayBpbnRlcnZhbCBvZiB0aGUgZGlzcGxheSBzY3JlZW5cbiAgVVNfVDogJ1xceDFmXFx4NTQnLCAvLyBTZXRzIHRoZSBjb3VudGVyIHRpbWUgYW5kIGRpc3BsYXlzIGl0IGluIHRoZSBib3R0b20gcmlnaHQgb2YgdGhlIHNjcmVlblxuICBVU19VOiAnXFx4MWZcXHg1NScsIC8vIERpc3BsYXlzIHRoZSB0aW1lIGNvdW50ZXIgYXQgdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGJvdHRvbSBsaW5lXG4gIFVTX1g6ICdcXHgxZlxceDU4JywgLy8gU2V0cyB0aGUgYnJpZ2h0bmVzcyBvZiB0aGUgZmx1b3Jlc2NlbnQgY2hhcmFjdGVyIGRpc3BsYXkgdHViZVxuICBVU19yOiAnXFx4MWZcXHg3MicsIC8vIFNlbGVjdHMgb3IgY2FuY2VscyByZXZlcnNlIGRpc3BsYXkgb2YgdGhlIGNoYXJhY3RlcnMgcmVjZWl2ZWQgYWZ0ZXIgdGhpcyBjb21tYW5kXG4gIFVTX3Y6ICdcXHgxZlxceDc2JyAvLyBTZXRzIHRoZSBEVFIgc2lnbmFsIGluIHRoZSBob3N0IGludGVyZmFjZSB0byB0aGUgTUFSSyBvciBTUEFDRSBzdGF0ZVxufTtcblxuZXhwb3J0IGVudW0gVW5kZXJsaW5lIHtcbiAgTm9VbmRlcmxpbmUgPSAwLFxuICBTaW5nbGUsXG4gIERvdWJsZVxufVxuXG5leHBvcnQgZW51bSBKdXN0aWZpY2F0aW9uIHtcbiAgTGVmdCA9IDAsXG4gIENlbnRlcixcbiAgUmlnaHRcbn1cblxuZXhwb3J0IGVudW0gRHJhd2VyUGluIHtcbiAgUGluMiA9IDAsXG4gIFBpbjVcbn1cblxuZXhwb3J0IGVudW0gRm9udCB7XG4gIEEgPSAwLFxuICBCLFxuICBDXG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGUge1xuICBVUENBID0gMCxcbiAgVVBDRSxcbiAgRUFOMTMsXG4gIEVBTjgsXG4gIENPREUzOSxcbiAgSVRGLFxuICBDT0RBQkFSLFxuICBDT0RFOTMsXG4gIENPREUxMjgsXG4gIFVDQyxcbiAgUlNTMTQsXG4gIFJTUzE0VHJ1bmNhdGVkLFxuICBSU1NMaW1pdGVkLFxuICBSU1NFeHBhbmRlZFxufVxuXG5leHBvcnQgZW51bSBQb3NpdGlvbiB7XG4gIE5vdFByaW50ZWQgPSAwLFxuICBBYm92ZSxcbiAgQmVsb3csXG4gIEJvdGhcbn1cblxuZXhwb3J0IGVudW0gQ29sb3Ige1xuICBDb2xvcjEgPSAwLFxuICBDb2xvcjJcbn1cblxuZXhwb3J0IGVudW0gVGV4dE1vZGUge1xuICBOb3JtYWwgPSAwLFxuICBEdWFsSGVpZ2h0ID0gMHgxMCxcbiAgRHVhbFdpZHRoID0gMHgyMCxcbiAgRHVhbFdpZHRoQW5kSGVpZ2h0ID0gMHgzMFxufVxuXG5leHBvcnQgZW51bSBSYXN0ZXJNb2RlIHtcbiAgTm9ybWFsID0gMCxcbiAgRHVhbFdpZHRoLFxuICBEdWFsSGVpZ2h0LFxuICBEdWFsV2lkdGhBbmRIZWlnaHRcbn1cblxuZXhwb3J0IGVudW0gRGVuc2l0eSB7XG4gIFNpbmdsZThEb3QgPSAweDAwLFxuICBEb3VibGU4RG90ID0gMHgwMSxcbiAgU2luZ2xlMjREb3QgPSAweDIwLFxuICBEb3VibGUyNERvdCA9IDB4MjFcbn1cblxuZXhwb3J0IGVudW0gQ29kZVRhYmxlIHtcbiAgUEM0MzcgPSAwLFxuICBLYXRha2FuYSxcbiAgUEM4NTAsXG4gIFBDODYwLFxuICBQQzg2MyxcbiAgUEM4NjUsXG4gIFdQQzEyNTIgPSAxNixcbiAgUEM4NjYsXG4gIFBDODUyLFxuICBQQzg1OCxcbiAgVGhhaTQyLFxuICBUaGFpMTEsXG4gIFRoYWkxMyxcbiAgVGhhaTE0LFxuICBUaGFpMTYsXG4gIFRoYWkxNyxcbiAgVGhhaTE4XG59XG5cbmV4cG9ydCBlbnVtIFFSRXJyb3JDb3JyZWN0TGV2ZWwge1xuICBMID0gNDgsXG4gIE0sXG4gIFEsXG4gIEhcbn1cblxuZXhwb3J0IGVudW0gUERGNDE3RXJyb3JDb3JyZWN0TGV2ZWwge1xuICBMZXZlbDEgPSA0OCxcbiAgTGV2ZWwyLFxuICBMZXZlbDMsXG4gIExldmVsNCxcbiAgTGV2ZWw1LFxuICBMZXZlbDYsXG4gIExldmVsNyxcbiAgTGV2ZWw4XG59XG5cbmV4cG9ydCBlbnVtIFBERjQxN1R5cGUge1xuICBTdGFuZGFyZCA9IDAsXG4gIFRydW5jYXRlZFxufVxuXG4vKipcbiAqIFtleHBvcnRzIGRlc2NyaXB0aW9uXVxuICogQHR5cGUge1t0eXBlXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgXztcbiJdfQ==