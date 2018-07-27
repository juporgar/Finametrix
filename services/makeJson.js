const Va = require('../models/vaModel');
const Vl = require('../models/vlModel');
class makeJson {
    constructor() {
        this.data = [];
        this.cabecera = [];
        this.cuerpo = [];
        this.fallo = [];
        this.sumSubida = 0;
        this.sumError = 0;
        this.resultadoPerfor = 0;
        this.contadorVa = 0;
        this.contadorVl = 0;
    }

    addElement(data) {

        var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
        var precio = /^[0-9]+([,][0-9]+)?$/;

        if (data[0] == "VA") {
            this.sumSubida++;
            this.cabecera.push(data);

            let vaModel = new Va({
                    isin: data[1],
                    nombre: data[2],
                    divisa: data[3],
                    familia: data[4]
                })
                .save(err => {
                    this.contadorVa++
                        if (err) console.error(err);
                    console.log(this.contadorVa + " Almacenado el VA");
                })
        } else if (data[0] === 'VL') {
            let validFecha = data[2].match(fecha);
            let validPrecio = data[3].match(precio);

            if (!validFecha || !validPrecio) {
                this.fallo.push(data)
                this.sumError++;
            } else {
                this.cuerpo.push(data)
                this.sumSubida++;

                let vlModel = new Vl({
                        tipo: data[0],
                        isin: data[1],
                        fecha: parseInt(data[2]),
                        precio: parseFloat(data[3].replace(',', '.'))
                    })
                    .save(err => {
                        if (err) console.error(err);
                        this.contadorVl++
                            console.log(this.contadorVl + " Almacenado el VL");
                    })
            }
        } else {
            this.fallo.push(data)
        }
    }

    getObject() {
        return this.cuerpo;
    }

    makeObject() {
        let objeto = {
            "cabecera": this.cabecera,
            "cuerpo": this.cuerpo,
            errores: this.fallo
        }
        return "Has subido " + this.sumSubida + " datos y has tenido " + this.sumError + " errores.De los cuales son estos: " + this.fallo
    }
}

module.exports = makeJson;