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
        if (argv[2] == "GET" && argv[3] == "products") {
            fetch(`https://fakestoreapi.com/products/`)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error))
                .finally(() => console.log("END"));
        } else if (argv[2] == "GET" && argv[3] > "0") {
            let id = argv[3];
            fetch(`https://fakestoreapi.com/${id}`)
                .then((response) => response.json())
                .then((data) => console.log("Seleccionaste el producto: ", data))
                .catch((error) => console.error(error))
                .finally(() => console.log("END"));
        } else if (argv[2] == "POST") { //post products title price cat
            let title = argv[4];
            let price = argv[5];
            let category = argv[6];
            console.log(`Recibimos el producto ${title}, con precio $${price} de la categoría ${category} satisfactoriamente.`);
        } else if (argv[2] == "PUT") {
            let id = argv[3];
            console.log(`Modificamos el item con id: ${id} satisfactoriamente.`);
        } else if (argv[2] == "DELETE") {
            try {
                let id = argv[3];
                const res = await fetch(`https://fakestoreapi.com/${id}`, { method: 'DELETE' });
                const data = await res.json();
                if (res.ok) {
                    console.log(`El item con el id ${id} se eliminó con éxito.`);
                } else {
                    console.log(`No se pudo eliminar el item con el id ${id}`);
                }
            } catch (err) {
                console.error('Error al eliminar producto: ', err);
            }
        }
    } else {
        console.log("Error.")
    }
}

main();
