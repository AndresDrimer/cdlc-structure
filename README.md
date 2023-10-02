ESTOY PENSANDO.
La page y layout es SRR, alli hago las peticiones. En Layout enlazo los context (client), que envuelven a la page
La page esta rellena de componentes client, que se filtran por variables que trae el context
En las page se hacen los action, CRUD que sale SSR.
Lo que tiene que ver con filtrar la UI es client, lo que es traer data es SSR, ya que traido de este modo se carag la primera vez del todo (incluido todo el HTML), eso mejora mucha el SEO; ademas es mas rapido, son las dos razones.

https://csvjson.com/csv2json

TODO FEATURES
anonymous:
search autocomplete (title and author)
UI responsive adjustments
IP auto-detect

user:
auth, users db
my books

admin:
auth
crud products - new layout

--------


CRUD SERVER ACTIONS reference: https://www.youtube.com/watch?v=q5smE9Rywts&t=580s

------------------
USEFULL LINKS DURING PROCESS
https://www.npmjs.com/package/google-spreadsheet  sobre google-spreadsheet

setup de la Api de Google en Node: https://developers.google.com/docs/api/quickstart/nodejs


---

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

---------
     
Deberian poder ordenarse por fecha de publicacion, ese dato falta en la tabla!

///////////////////////////

Idea para encontrar localizacion por pais (sirve solo sobre Vercel, pero para nosotros va!)
Using the Geo from NextRequest#
If you're deploying in Vercel, it's incredibly easy and accurate to get the country of the user. Inside NextJS middleware.ts, there's a built-in geo property from the NextRequest class that we can access to get the user's country:

// middleware.ts
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
const RESTRICTED_COUNTRIES = ["PH", "US"]
export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const res = NextResponse.next();
  const country = request.geo?.country ?? ""
  if(RESTRICTED_COUNTRIES.includes(country)){
    return NextResponse.rewrite(new URL("/restricted", request.url))
  }
  return res;
}

//esta es otra manera, por si esa no funciona:
If you're not deploying in Vercel and not using a CDN proxy, you can use a 3rd-Party IP service to get the country. There are many available services such as ipstack.com, ipapi.co, ipwhois.io, and many more.

This is the slowest way of getting the user country due to the extra API call, but it's more reliable than using headers (2nd option). You have to choose whether you prioritize speed or reliability.

In this example, we'll use ipapi.co:

import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
const RESTRICTED_COUNTRIES = ["PH", "US"];
export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const res = NextResponse.next();
  const country = request.cookies.get("country")?.value ?? "";
  //get the ip address depending on your hosting provider.
  const ip = request.ip;
  if (!country) {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/country/`);
      const country = await response.text();
      if (country) {
        res.cookies.set("country", country);
      }
    } catch (error) {}
  }
  if (RESTRICTED_COUNTRIES.includes(country)) {
    return NextResponse.rewrite(new URL("/restricted", request.url));
  }
  return res;
}

//////////////////
about making an Index on MongoDb to use autocomplete feature on SearchBar:
https://www.mongodb.com/docs/atlas/atlas-search/autocomplete/