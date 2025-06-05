import "@testing-library/jest-dom";

// Polyfill untuk TextEncoder
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Tambahkan setup global jika diperlukan
