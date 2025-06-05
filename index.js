import fetch from 'node-fetch';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import fs from "node:fs"; //para leer archivos
import path from "node:path";
import { argv } from "node:process";
import buendia from "./products";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BASE_URL = 'https://fakestoreapi.com';

if (argv[2].toLocaleLowerCase() == "GET".toLocaleLowerCase()) {
    console.log("Toma un dato");
} else if (argv[2].toLocaleLowerCase() == "POST".toLocaleLowerCase()) {
    console.log(`Recibimos ${argv[3]} satisfactoriamente.`);
} else if (argv[2].toLocaleLowerCase() == "PUT".toLocaleLowerCase()) {
    console.log(`Modificamos el item con id: ${argv[3]} satisfactoriamente.`);
} else if (argv[2].toLocaleLowerCase() == "DELETE".toLocaleLowerCase()) {
    console.log(`El item con el id: ${argv[3]} se eliminó con éxito.`);
}
