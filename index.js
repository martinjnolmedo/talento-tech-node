import fetch from 'node-fetch';

const [, , method, endpoint, ...args] = process.argv;

const BASE_URL = 'https://fakestoreapi.com';

function showUsage() {
    console.log(`\nUso correcto:

npm run start GET products
npm run start GET products/<productId>
npm run start POST products <title> <price> <category>
npm run start DELETE products/<productId>\n`);
}

async function handleRequest() {
    if (!method || !endpoint) {
        showUsage();
        return;
    }

    const [resource, id] = endpoint.split('/');
    const url = `${BASE_URL}/${resource}${id ? `/${id}` : ''}`;

    switch (method.toUpperCase()) {
        case 'GET': {
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error('Error al obtener datos:', err);
            }
            break;
        }
        case 'POST': {
            const [title, price, category] = args;
            if (!title || !price || !category) {
                console.log('Faltan argumentos. Uso: npm run start POST products <title> <price> <category>');
                return;
            }
            try {
                const body = { title, price: parseFloat(price), category };
                const res = await fetch(`${BASE_URL}/${resource}`, {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await res.json();
                console.log('Producto creado:', data);
            } catch (err) {
                console.error('Error al crear producto:', err);
            }
            break;
        }
        case 'DELETE': {
            if (!id) {
                console.log('Falta el ID del producto. Uso: npm run start DELETE products/<productId>');
                return;
            }
            try {
                const res = await fetch(url, { method: 'DELETE' });
                const data = await res.json();
                console.log('Producto eliminado:', data);
            } catch (err) {
                console.error('Error al eliminar producto:', err);
            }
            break;
        }
        default:
            console.log('Método no soportado. Usa GET, POST o DELETE.');
            showUsage();
    }
}

handleRequest();
