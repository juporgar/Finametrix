
class calcular{
    constructor(){
        /*Variables de Performance*/
        this.precioInicio = 2008;
        this.precioFin = 2018;
        this.resulPrecio = 0;
        /*Variables de Volatility*/
        this.x = [1,2,3,4,5];
        this.sumTotal = 0;
        this.resulMedia = 0;
        this.restaVari=[];
        this.resulVarianza = [];
        this.sumResulVari = 0;
        this.restaResulVari = 0;
        this.resulVariTotal = 0;
        this.raizFinal = 0;
    }

    performance(){
        this.resulPrecio=(this.precioFin - this.precioInicio) / this.precioInicio
        console.log(this.resulPrecio);
        
    }

    /*Volatility */
    /*1ºSacar Media*/
    volatility(){
        for(var i=0; i < this.x.length; i++){
            this.sumTotal = this.x[i] + this.sumTotal;
        }
            this.resulMedia = this.sumTotal / this.x.length;    
        console.log(this.resulMedia)
        /*2º Sacar Varianza*/
        for(var i=0;i< this.x.length;i++){
            this.restaVari=(this.x[i] - this.resulMedia)
            this.resulVarianza[i] = this.restaVari * this.restaVari;
        }
        console.log(this.resulVarianza)
        /*3º Varianza Total */
        for(var i=0;i<this.resulVarianza.length; i++){
           this.sumResulVari = this.sumResulVari + this.resulVarianza[i]
        }
        this.restaResulVari = this.resulVarianza.length -1
        this.resulVariTotal = this.sumResulVari / this.restaResulVari
       console.log(this.resulVariTotal)
       /*4º Desviación Estandar*/ 
        this.raizFinal = Math.sqrt(this.resulVariTotal)
        console.log(this.raizFinal)
        return "El resultado final de volatility es -> " + this.raizFinal

    }
}
module.exports = calcular