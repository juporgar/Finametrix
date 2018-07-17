function getFormat(){
    console.log("HOLAAA");
    
    var a
    var subir=$("#file");
    for (var i=0; i < subir.length; i++){
        var caracter = subir.charAt(i)
        if( caracter === "."){
            a= a + caracter;
            console.log(a)
        }
    }

    if(a !== "CSV" || a !== "csv"){
        return "No es un Archivo de formato CSV"
    }
}