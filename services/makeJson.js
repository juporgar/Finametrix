class makeJson
{
    constructor(){
        this.data=[];
        this.cabecera=[];
        this.cuerpo=[];
    }

    addElement(data){
        if(data[0]=="VA"){
            this.cabecera.push(data); //Los que son VA nos los guarda en la variable cabecera
        }else{
            this.cuerpo.push(data); //nos guarda los elementos (ya que no son VA)
        }
    }

    getObject(){
        return this.cuerpo; //Nos muestra el cuerpo
    }

    makeObject(){
        let objeto={
            "cabecera":
            
                this.cabecera[0] //Aqui nos muestras las cabeceras que tenemos (en este caso, nos muestra la 1 porque hemos puesto el 0 en el array)
            
        }
        console.log(JSON.stringify(objeto));
    }
}

module.exports=makeJson;