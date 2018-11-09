# Desarrollado con:

- Hbs
- Js
- Bower
- MongoDB
- Express

## Pasos a seguir:

Lo primero que tenemos que hacer después de descargarnos los archivos, es instalar las librerias que tenemos en package.json y bower.json usando npm i.

Después, hacemos un npm start y se nos abrirá la pagina.

También se debe iniciar MongoDB para levantar la base de datos.


## Como funciona

En la pagina inicial es donde debemos de subir un archivo .CSV (no aceptará otro).

Una vez subido el archivo, se guardará directamente en la base de datos denominada "Finametrix", quitando los datos con errores de formato que esta indicado en el codigo.

Luego desde Postman, hacemos peticiones de los datos que queremos calcular,  /api/performance?isin=&dateFrom=&dateTo=

Y si todo sale bien, en la petición get nos mostrará los resultados de Performance y Volatility.

En caso de que alguno de los datos que hemos puesto en la URL no existen en la base de datos, no funcionará.