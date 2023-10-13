/**
 * @param {string} hex
 * @returns {string}
 */
const pad = (hex) => {
    return (hex.length === 1 ? "0" + hex : hex);
}


const HexTorgb = (hex) => {
    hex = hex.replace(/^#/,'');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const bigint = parseInt(hex,16);
    const r = (bigint >> 16)& 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

module.exports = {
    HexTorgb: HexTorgb
}

