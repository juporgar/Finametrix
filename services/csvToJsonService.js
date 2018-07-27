var csv = require("fast-csv");
let MakeJson = require("./makeJson");

class csvToJson {
    constructor() {
        this.objeto = [];
        this.addarray = function (data) {
            this.objeto.push(data);
        };
    }

    make() {
        return new Promise((resolve, reject) => {
            let resultado;
            let makeJson = new MakeJson();
            csv
                .fromPath("../finametrix/public/files/catalogo_20180710.csv", {
                    delimiter: ";",
                    noheaders: true
                })
                .on("data", function (data) {
                    makeJson.addElement(data);
                })
                .on("end", function () {
                    resultado = makeJson.makeObject();
                    resolve(resultado)
                });
        })
    }
}

module.exports = csvToJson;