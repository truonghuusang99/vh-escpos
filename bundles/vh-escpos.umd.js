(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('vh-escpos', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['vh-escpos'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    // Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
    var PrintBuffer = /** @class */ (function () {
        function PrintBuffer(size) {
            if (size === void 0) { size = 1024; }
            this.buffer = new Uint8Array(size);
            this.size = 0;
        }
        PrintBuffer.prototype.clear = function () {
            this.size = 0;
        };
        PrintBuffer.prototype.flush = function () {
            var buffer = new Uint8Array(this.buffer.slice(0, this.size));
            this.size = 0;
            return buffer;
        };
        PrintBuffer.prototype.write = function (data) {
            this.resize(data.length);
            this.buffer.set(data, this.size);
            this.size += data.length;
            return this;
        };
        PrintBuffer.prototype.writeUInt8 = function (value) {
            this.resize(1);
            this.buffer[this.size++] = value & 0xFF;
            return this;
        };
        PrintBuffer.prototype.writeUInt32LE = function (value, noAssert) {
            this.resize(4);
            // tslint:disable no-bitwise
            this.buffer[this.size++] = (value) & 0xFF;
            this.buffer[this.size++] = (value >> 8) & 0xFF;
            this.buffer[this.size++] = (value >> 16) & 0xFF;
            this.buffer[this.size++] = (value >> 24) & 0xFF;
            // tslint:enable no-bitwise
            return this;
        };
        PrintBuffer.prototype.writeUInt16LE = function (value, noAssert) {
            this.resize(2);
            // tslint:disable no-bitwise
            this.buffer[this.size++] = (value) & 0xFF;
            this.buffer[this.size++] = (value >> 8) & 0xFF;
            // tslint:enable no-bitwise
            return this;
        };
        PrintBuffer.prototype.resize = function (need) {
            var remaining = this.buffer.length - this.size;
            if (remaining < need) {
                var oldBuffer = this.buffer;
                var factor = Math.ceil((need - remaining) / oldBuffer.length) + 1;
                this.buffer = new Uint8Array(oldBuffer.length * factor);
                this.buffer.set(oldBuffer, 0);
            }
        };
        return PrintBuffer;
    }());

    /**
     * Utility function that converts numbers into hex values
     *
     * @usage:
     *   numToHex(256) => '0100'
     *   numToHex(0) => '00'
     */
    var numToHexString = function (value) {
        value = +value;
        if (!isNaN(value)) {
            value = value.toString(16);
            while (value.length % 2 !== 0) {
                value = '0' + value;
            }
        }
        return value;
    };
    var ɵ0 = numToHexString;
    /**
     * ESC/POS _ (Constants)
     */
    var _ = {
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
            var widthDec = (width - 1) * 16;
            var heightDec = height - 1;
            var sizeDec = widthDec + heightDec;
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

    var styles = function (type) {
        var styled = '';
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

    var ESC = 0x1b;
    var GS = 0x1d;
    var EscBuilder = /** @class */ (function () {
        function EscBuilder() {
            this.encoder = new TextEncoder();
            this.size = 48;
        }
        EscBuilder.prototype.init = function () {
            this.buffer = new PrintBuffer();
            this.write(ESC);
            this.write('@');
            return this;
        };
        EscBuilder.prototype.flush = function () {
            return this.buffer.flush();
        };
        EscBuilder.prototype.feed = function (lineCount) {
            if (lineCount === void 0) { lineCount = 1; }
            this.write(ESC);
            this.write('d');
            this.write(lineCount);
            return this;
        };
        EscBuilder.prototype.cut = function (cutType) {
            if (cutType === void 0) { cutType = 'full'; }
            this.write(GS);
            this.write('V');
            this.write(cutType === 'full' ? 1 : 0);
            return this;
        };
        EscBuilder.prototype.writeLine = function (value) {
            return this.write(value + "\n");
        };
        EscBuilder.prototype.drawLine = function () {
            var lineText = '';
            for (var i = 0; i < this.size; i++) {
                lineText += '-';
            }
            return this.write(lineText + "\n");
        };
        EscBuilder.prototype.setPageSize = function (size) {
            this.size = size;
            return this;
        };
        EscBuilder.prototype.writeTable = function (data) {
            var cellWidth = this.size / data.length;
            var lineTxt = '';
            for (var i = 0; i < data.length; i++) {
                lineTxt += data[i].toString();
                var spaces = cellWidth - data[i].toString().length;
                for (var j = 0; j < spaces; j++) {
                    lineTxt += ' ';
                }
            }
            return this.write(lineTxt + "\n");
        };
        EscBuilder.prototype.writeCustomTable = function (data, options) {
            options = options || { size: [] };
            options.size = options.size || [];
            var _a = __read(options.size || [], 2), _b = _a[0], width = _b === void 0 ? 1 : _b, _c = _a[1], height = _c === void 0 ? 1 : _c;
            var baseWidth = Math.floor(this.size / width);
            var cellWidth = Math.floor(baseWidth / data.length);
            var leftoverSpace = baseWidth - cellWidth * data.length;
            var lineStr = '';
            var secondLineEnabled = false;
            var secondLine = [];
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var align = (obj.align || '').toUpperCase();
                var tooLong = false;
                obj.text = obj.text.toString();
                var textLength = obj.text.length;
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
                    var spaces = (cellWidth - textLength) / 2;
                    for (var s = 0; s < spaces; s++) {
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
                    for (var s = 0; s < spaces - 1; s++) {
                        lineStr += ' ';
                    }
                }
                else if (align === 'RIGHT') {
                    var spaces = cellWidth - textLength;
                    if (leftoverSpace > 0) {
                        spaces += leftoverSpace;
                        leftoverSpace = 0;
                    }
                    for (var s = 0; s < spaces; s++) {
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
                    var spaces = Math.floor(cellWidth - textLength);
                    if (leftoverSpace > 0) {
                        spaces += leftoverSpace;
                        leftoverSpace = 0;
                    }
                    for (var s = 0; s < spaces; s++) {
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
            this.write(lineStr + "\n");
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
        };
        EscBuilder.prototype.setInverse = function (inverse) {
            if (inverse === void 0) { inverse = true; }
            this.write(GS);
            this.write('B');
            this.write(inverse ? 1 : 0);
            return this;
        };
        EscBuilder.prototype.setUnderline = function (value) {
            if (value === void 0) { value = true; }
            this.write(ESC);
            this.write('-');
            this.write(value ? 1 : 0);
            return this;
        };
        EscBuilder.prototype.setJustification = function (value) {
            if (value === void 0) { value = 'left'; }
            var alignment;
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
        };
        EscBuilder.prototype.setBold = function (bold) {
            if (bold === void 0) { bold = true; }
            this.write(ESC);
            this.write('E');
            this.write(bold ? 1 : 0);
            return this;
        };
        EscBuilder.prototype.raster = function (image, mode) {
            if (mode === void 0) { mode = RasterMode.Normal; }
            var header = new Uint8Array([GS, 0x76, 0x30, mode]);
            var raster = image.toRaster();
            this.write(header);
            this.write(raster.width, 16);
            this.write(raster.height, 16);
            this.write(raster.data);
            return this;
        };
        /**
        @param mode 0, 0x30
        */
        EscBuilder.prototype.setSize = function (size) {
            if (size === void 0) { size = 'normal'; }
            this.write(ESC);
            this.write('!');
            this.write(size === 'normal' ? 0 : 0x30);
            return this;
        };
        EscBuilder.prototype.write = function (value, number) {
            if (number === void 0) { number = 8; }
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
        };
        return EscBuilder;
    }());

    var VhEscposService = /** @class */ (function () {
        function VhEscposService() {
        }
        /**
         * Initialize a new print queue
         */
        VhEscposService.prototype.init = function () {
            this.builder = new EscBuilder();
            this.builder.init();
            return this;
        };
        /**
         *
         * @param cutType full|partial
         */
        VhEscposService.prototype.cut = function (cutType) {
            if (cutType === void 0) { cutType = 'full'; }
            this.builder.cut(cutType);
            return this;
        };
        /**
         *
         * @param lineCount How many lines to feed
         */
        VhEscposService.prototype.feed = function (lineCount) {
            if (lineCount === void 0) { lineCount = 1; }
            this.builder.feed(lineCount);
            return this;
        };
        VhEscposService.prototype.setInverse = function (value) {
            if (value === void 0) { value = true; }
            this.builder.setInverse(value);
            return this;
        };
        VhEscposService.prototype.setBold = function (value) {
            if (value === void 0) { value = true; }
            this.builder.setBold(value);
            return this;
        };
        VhEscposService.prototype.setUnderline = function (value) {
            if (value === void 0) { value = true; }
            this.builder.setUnderline(value);
            return this;
        };
        /**
         *
         * @param value left|center\right
         */
        VhEscposService.prototype.setJustification = function (value) {
            if (value === void 0) { value = 'left'; }
            this.builder.setJustification(value);
            return this;
        };
        /**
         *
         * @param value normal|large
         */
        VhEscposService.prototype.setSize = function (value) {
            if (value === void 0) { value = 'normal'; }
            this.builder.setSize(value);
            return this;
        };
        /**
         *
         * @param text
         */
        VhEscposService.prototype.writeLine = function (text) {
            if (text === void 0) { text = ''; }
            this.builder.writeLine(text);
            return this;
        };
        /**
         *
         *
         */
        VhEscposService.prototype.drawLine = function () {
            this.builder.drawLine();
            return this;
        };
        /**
         *
         * @param data
         */
        VhEscposService.prototype.writeTable = function (data) {
            this.builder.writeTable(data);
            return this;
        };
        /**
         *
         * @param size
         */
        VhEscposService.prototype.setPageSize = function (size) {
            if (size === void 0) { size = 48; }
            this.builder.setPageSize(size);
            return this;
        };
        VhEscposService.prototype.writeCustomTable = function (data, options) {
            if (options === void 0) { options = {}; }
            this.builder.writeCustomTable(data, options);
            return this;
        };
        VhEscposService.prototype.image = function (image) {
            this.builder.raster(image);
            return this;
        };
        /**
         * write the current builder value to the driver and clear out the builder
         */
        VhEscposService.prototype.flush = function () {
            return this.builder.flush();
        };
        return VhEscposService;
    }());
    VhEscposService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function VhEscposService_Factory() { return new VhEscposService(); }, token: VhEscposService, providedIn: "root" });
    VhEscposService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    VhEscposService.ctorParameters = function () { return []; };

    /*
     * Public API Surface of vh-escpos
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.VhEscposService = VhEscposService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vh-escpos.umd.js.map
