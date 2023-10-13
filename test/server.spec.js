const expect = require("chai").expect;
const request = require("request");
const  app  = require("../src/server");
const port = 5000;

describe("Color Code Converter API", () => {
    let server = undefined; 

    before("Start server before run tests" , (done) => {
        server = app.listen(port, () => {
            console.log(`Server listening: localhost:${port}`);
            done();
        });
    });
    describe("Hex to RGB conversion" , () => {
        const url = `http://localhost:${port}/hex-to-rgb?hexValue=00ff00`;
        it("returns status 200", (done) => {
            request(url, (error, response, body) =>{
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("returns the color in RGB", (done) => {
            request(url,(error, response, body) => {
                expect(body).to.equal("rgb(0, 255, 0)");
                done();
            });
        });
    });
    after("Stop server after tests", (done) => {
        server.close();
        done();
    });
});