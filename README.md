Lo primero que tenemos que hacer, después de descargarnos los archivos, es instalar las librerias que tenemos en package.json y bower.json.

Luego iniciamos MongoDB y postman.

Después, hacemos un npm start y se nos abrirá la pagina, donde debemos de subir un archivo .CSV (no aceptará otro).

Una vez subido el archivo, se guardará directamente en la base de datos denominada "Finametrix", 
quitando los datos con errores de formato que esta indicado en el codigo.

Luego con Postman, hacemos peticiones de los datos que queremos calcular, poniendo el isin y las fechas (una de inicio y otra de fin)
