import fetch from 'node-fetch';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import fs from "node:fs"; //para leer archivos
import path from "node:path";
import { argv } from "node:process";
import buendia from "./products";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    if (argv.length > 1) {
        if (argv[2] == "GET" && argv[3] > "0") {
            let id = argv[3];
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error))
                .finally(() => console.log("END"));
            console.log(`Seleccionaste el producto ${argv[3]}: ${id} `);
        } else if (argv[2] == "GET" && argv[3] == null) {
            fetch(`https://fakestoreapi.com/products/`)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error))
                .finally(() => console.log("END"));
        } else if (argv[2] == "POST") {
            let id = argv[3].toString();
            console.log(`Recibimos ${id} satisfactoriamente.`);
        } else if (argv[2] == "PUT") {
            let id = argv[3].toString();
            console.log(`Modificamos el item con id: ${id} satisfactoriamente.`);
        } else if (argv[2] == "DELETE") {
            let id = argv[3].toString();
            console.log(`El item con el id: ${id} se eliminó con éxito.`);
        }
    } else {
        console.log("Error.")
    }
}

main();

