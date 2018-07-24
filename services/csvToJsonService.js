var csv = require("fast-csv");
let MakeJson = require("./makeJson");

class csvToJson {
    constructor() {
        this.objeto=[];
        // this.fallo = [];
        this.addarray=function(data){
            this.objeto.push(data);
        };
    }

    make(){
        return new Promise( (resolve, reject) => {
            let resultado;
            let makeJson= new MakeJson();
            csv
            .fromPath("../finametrix/public/files/catalogo_20180710.csv",{delimiter:";", noheaders:true}) //Seleccionamos el archivo que vamos a mirar
            .on("data", function (data) {           
              makeJson.addElement(data); //hacemos llamada a makeJson
            })
            .on("end", function () {
              resultado = makeJson.makeObject();
              resolve(resultado) //hacemos llamada a makeJson cuando finalice (es decir, cuando todo acaba)
            });  
        })        
    }
}

module.exports = csvToJson;