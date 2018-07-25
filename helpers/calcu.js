
class calcular{
    constructor(){
        /*Variables de Performance*/
        this.cantidad = [654,87897,87,87,87,3131,646,87,354,684,5,6,4,354,546,4,654,654,]
        this.fechaInicio = 654;
        this.fechaFin = 87;
        this.precioInicio = 0;
        this.precioFin = 0;
        this.resulPrecio = 0;
        this.resultadoTotal = 0;
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
        for(var i=0; i<this.cantidad.length;i++){
            if(this.fechaInicio === this.cantidad[i]){
                this.precioInicio = this.precioInicio + this.cantidad[i]
            }else if(this.fechaFin === this.cantidad[i]){
                this.precioFin = this.precioFin + this.cantidad[i]
            }
        }
        console.log("Precio fin ->" + this.precioFin);
        console.log("Precio inicio ->" + this.precioInicio);
        
        this.resulPrecio = this.precioFin - this.precioInicio
        this.resulPrecio =  Math.abs(this.resulPrecio);
        this.resulTotal = this.resulPrecio / this.precioInicio
        
        console.log(this.resulPrecio);
        console.log("Este es el resultado de Performance -> " + this.resulTotal);
        
    }

    /*Volatility */
    /*1ºSacar Media*/
    volatility(){
        for(var i=0; i < this.x.length; i++){
            this.sumTotal = this.x[i] + this.sumTotal;
        }
            this.resulMedia = this.sumTotal / this.x.length;    
        console.log("Esta es la Media -> " + this.resulMedia)
        /*2º Sacar Varianza*/
        for(var i=0;i< this.x.length;i++){
            this.restaVari=(this.x[i] - this.resulMedia)
            this.resulVarianza[i] = this.restaVari * this.restaVari;
        }
        console.log("Esta es la Varianza -> " + this.resulVarianza)
        /*3º Varianza Total */
        for(var i=0;i<this.resulVarianza.length; i++){
           this.sumResulVari = this.sumResulVari + this.resulVarianza[i]
        }
        this.restaResulVari = this.resulVarianza.length -1
        this.resulVariTotal = this.sumResulVari / this.restaResulVari
       console.log("Esta es la Varianza Total -> " + this.resulVariTotal)
       /*4º Desviación Estandar*/ 
        this.raizFinal = Math.sqrt(this.resulVariTotal)
        console.log("Esta es la Raiz Final -> " + this.raizFinal)
        return "El resultado final de volatility es -> " + this.raizFinal
    }
}
module.exports = calcular