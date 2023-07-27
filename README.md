https://csvjson.com/csv2json

TODO FEATURES
anonymous:
search autocomplete (title and author)
collections and combos: special logic to show products contained and their content

user:
auth, users db
my books

admin:
auth
crud products - new layout

--------

USEFULL LINKS DURING PROCESS
https://www.npmjs.com/package/google-spreadsheet  sobre google-spreadsheet

setup de la Api de Google en Node: https://developers.google.com/docs/api/quickstart/nodejs

mi archivo: https://docs.google.com/document/d/1DPkc_l0eu9wECSH4mEqKbQrWbDtkh3kbao9S0eYNhX8/edit
key: 1DPkc_l0eu9wECSH4mEqKbQrWbDtkh3kbao9S0eYNhX8
---

esto trae un pdf: https://docs.google.com/feeds/download/documents/Export?exportFormat=pdf&format=pdf&id=<id>

un proyecto en react usando PDFLayout, un creador de PDFs: https://codesandbox.io/s/nextjs-pdf-ghd9v

pero yo necesito solo mostrarlo

guia para conectar un documento google sheet:; https://www.youtube.com/watch?v=sRNQ-9DVsQU&ab_channel=TheWhiz


una idea para desbloquear cada archivo es agregar el mail del comprador a la permision de google de cada documento:https://www.youtube.com/watch?v=4fDllS3V9Ro&ab_channel=RayPastore%2CPh.D.
no se si con google api pueda mandarle esto de manera programatica cada vez. Igual ya es mucho mejor agregarle el mail al comprador que pedirle que ingrese un password cada vez!!
Si tu usuario google esta registrado, y tu usuario agregado a los permisos del archivo, te lo va a abrir de una. El tema es cómo agregar el mail del User a los permisos de cada Documento de Google. Eso tiene que saer a traves de la GoogleAPis, sin duda


AQUI how to add a permission for a google doc from google apis:
https://www.phind.com/agent?cache=clkexy7e5006wmp08k9ogq8wo
const {google} = require('googleapis');

// Create a new permission
const permission = {
    type: 'user',
    role: 'writer',
    emailAddress: 'user@example.com'
};

// Call the permissions.create method to add the permission to the document
await drive.permissions.create({
    fileId: documentId,
    requestBody: permission
});

Instrucciones para conectarse a la Google APi
Step 1: Set up the Google Drive API

Enable the Google Drive API in your Google Cloud Console.
Create credentials (OAuth 2.0 client ID) for your project to authenticate the API requests.
Download the JSON file containing the credentials and save it securely.
Step 2: Set up the development environment

Choose the programming language you prefer to use with the Google Drive API.
Install the required libraries or packages for your chosen language.
Step 3: Authenticate your application

Load the credentials JSON file and retrieve the necessary authentication token.
Include the authentication process in your code to authorize your application to access user's Google Drive.
Step 4: Add permission to the document

Use the permissions.create method to add a permission for the document.
Specify the document ID and provide the details of the permission, such as type, role, and email address.


      "gris": "#b3b1b2",
      "rojo": "#e40613",
      "ciudades": "#23afb2",
      "habitat": "#c33432",
      "movilidad": "#d8aa06",
      "territorio": "#ce050b",
      "urbanidad": "#a8301f",

      coleccion ciudades - NO, esto son digitales
      La Ciudad Posible= cc620
      Ciudades vividas, = CC023
      Luces y sombras del urbanismo en Barcelona, =CC003
      Ciudad, Comercio y Consumo 1, 
      Ciudad, Comercio y Consumo 2, 
      Circuitos de la economía urbana, 
      La Ciudad Patrimonial 

Deberian poder ordenarse por fecha de publicacion, ese dato falta en la tabla!
