class makeJson {
    constructor() {
        this.data = [];
        this.cabecera = [];
        this.cuerpo = [];
        this.fallo = [];
    }

    addElement(data) {
        
        var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
        var precio = /^[0-9]+([,][0-9]+)?$/;

        if (data[0] == "VA") {
            this.cabecera.push(data); //Los que son VA nos los guarda en la variable cabecera
        } else if(data[0] === 'VL') {
            let validFecha = data[2].match(fecha);
            let validPrecio = data[3].match(precio);
           //  console.log(validFecha, validPrecio, data);
            
            if(!validFecha || !validPrecio) {
                this.fallo.push(data)
            } else {
                data[3] = parseFloat( data[3].replace(',','.') )
                data[2] = parseFloat( data[2] )
                
                this.cuerpo.push(data)
            }
        } 
         else {
            this.fallo.push(data)
        }
    }

    getObject() {
        return this.cuerpo; //Nos muestra el cuerpo
    }

    makeObject() {
        let objeto = {
            "cabecera":
                this.cabecera //Aqui nos muestras las cabeceras que tenemos (en este caso, nos muestra la 1 porque hemos puesto el 0 en el array)
                ,
            "cuerpo": this.cuerpo,
            errores: this.fallo
        }
        console.log(this.fallo);
        return objeto;
    }
}

module.exports = makeJson;