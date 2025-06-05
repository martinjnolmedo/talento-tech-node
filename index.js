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

fetch('https://fakestoreapi.com/products/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

async function main() {
    if (argv.length > 1) {
        if (argv[2] == "GET") {
            console.log("Toma un dato");
        } else if (argv[2] == "POST") {
            console.log(`Recibimos ${argv[3]} satisfactoriamente.`);
        } else if (argv[2] == "PUT") {
            console.log(`Modificamos el item con id: ${argv[3]} satisfactoriamente.`);
        } else if (argv[2] == "DELETE") {
            console.log(`El item con el id: ${argv[3]} se eliminó con éxito.`);
        }
    } else {
        console.log("Error.")
    }
}

main();
