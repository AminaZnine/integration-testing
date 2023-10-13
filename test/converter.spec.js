const expect = require("chai").expect;
const converter = require("../src/converter");

describe("Color Code Converter", () => {
    describe("Hex to RGB conversion", () => {
        it("converts Hex color to RGB", () => {
            const hexColor = '#00ff00';
            const rgbColor = converter.HexTorgb(hexColor);
            expect(rgbColor).to.equal("rgb(0, 255, 0)");


        });
    });

});