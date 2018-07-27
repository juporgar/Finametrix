const Va = require('../models/vaModel');
const Vl = require('../models/vlModel');
class calcular {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        /*Variables de Performance*/
        this.precioInicio = 0;
        this.precioFin = 0;
        this.resulPrecio = 0;
        this.resultadoTotal = 0;
        /*Variables de Volatility*/
        this.dinero = []
        this.sumTotal = 0;
        this.resulMedia = 0;
        this.restaVari = [];
        this.resulVarianza = [];
        this.sumResulVari = 0;
        this.restaResulVari = 0;
        this.resulVariTotal = 0;
        this.raizFinal = 0;
    }

    operation(isin, dateFrom, dateTo, data) {
        // if (this.isin !== true || this.dataF !== true || this.dataT !== true) {
        //     console.log (" Sintiendolo mucho no existe la fecha o el isin indicado ")
        // } else {

        /*Performance */

        if (data[0].precio) {
            this.precioInicio = data[0].precio;
        }
        if (data[data.length - 1].precio) {
            this.precioFin = data[data.length - 1].precio;
        }

        this.resulPrecio = this.precioFin - this.precioInicio
        this.resulTotal = this.resulPrecio / this.precioInicio

        /*Volatility */
        /*1ºSacar Media*/
        for (var i = 0; i < data.length; i++) {
            this.dinero.push(data[i].precio)
        }

        for (var i = 0; i < this.dinero.length; i++) {
            this.sumTotal = this.sumTotal + this.dinero[i]
        }

        this.resulMedia = this.sumTotal / this.dinero.length;

        /*2º Sacar Varianza*/
        for (var i = 0; i < data.length; i++) {
            this.restaVari = (data[i].precio - this.resulMedia)
            this.resulVarianza[i] = this.restaVari * this.restaVari;
        }
        /*3º Varianza Total */
        for (var i = 0; i < this.resulVarianza.length; i++) {
            this.sumResulVari = this.sumResulVari + this.resulVarianza[i]
        }
        this.restaResulVari = this.resulVarianza.length - 1
        this.resulVariTotal = this.sumResulVari / this.restaResulVari
        //*4º Desviación Estandar*/
        this.raizFinal = Math.sqrt(this.resulVariTotal)

        this.res.json({
            performance: "Este es el resultado de performance: " + this.resulTotal,
            volatility: " Este es el resultado de volatility: " + this.raizFinal
        })
    }
}
module.exports = calcular