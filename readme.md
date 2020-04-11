# AnunPractice

AnunPractice es un API con un front básico para la visualización de anuncios

## Instalación

Vamos a necesitar Node.js v4+ y base de datos MongoDB

Vamos a utilizar la herramienta [NPM](https://www.npmjs.com/) para instalar AnunPractice y sus dependencias.


## Uso

#### Instalando dependencias
```bash
npm install
```

#### Importar base de datos inicial
```bash
npm install_db
```

#### Arrancar la AnunPractice en modo desarrollo. http://localhost:3000
```bash
npm run dev
```

#### Arrancar la AnunPractice en modo producción
```bash
npm start
```

## Interacion con el API

#### Visualizando todos los anuncios
```bash
Request URL: http://localhost:3000/api/anuncios
Request Method: GET
Status Code: 200 OK or 404 KO
```

#### Visualizando un solo anuncio por ID
```bash
Request URL: http://localhost:3000/api/anuncios/5e886da2227d1c4abcff64be
Request Method: GET
Status Code: 200 OK or 500 KO

{
    "result": {
        "tags": [
        "lifestyle"
        ],
        "_id": "5e886da2227d1c4abcff64be",
        "name": "Galletas",
        "sell": true,
        "price": 2,
        "photo": "galletas.JPG",
        "__v": 0
    }
}
```

#### Creando un anuncio por motodo POST
```bash
Request URL: http://localhost:3000/api/anuncios/
Request Method: POST

Headers: 
{
    content-type: 'application/x-www-form-urlencoded'
}

body:
{
    name: String,
    sell: Boolean,
    price: Number,
    photo: String,
    tags: [String]
}

{
    "result": {
        "tags": [
            "motor"
        ],
        "_id": "5e91b6fef81d0b3d18e78658",
        "name": "Avion",
        "price": 100000000,
        "sell": true,
        "photo": "avion.jpg",
        "__v": 0
    }
}
```

#### Visualizando tags disponibles
```bash
Request URL: http://localhost:3000/api/anuncios/tags
Request Method: GET

[
    "lifestyle",
    "mobile",
    "motor",
    "work"
]
```

## Filtros disponibles

#### Por nombre
```bash
Request URL: GET /api/anuncios?name=name
Request Method: GET
```
#### Por precio
```bash
Request URL: GET /api/anuncios?price='lowprice'-'highprice'
Request Method: GET
```
#### Por tag
```bash
Request URL: GET /api/anuncios?tag=tag
Request Method: GET
```
#### Por estado
```bash
Request URL: GET /api/anuncios?sell='true->Venta' or 'false-> compra'
Request Method: GET
```
#### Por limite de anuncios
```bash
Request URL: GET /api/anuncios?limit=limit
Request Method: GET
Max without limit = 10
```
#### Por limite de anuncios a ignorar desde 0
```bash
Request URL: GET /api/anuncios?start=start
Request Method: GET
```
#### Por orden
```bash
Request URL: GET /api/anuncios?sort=sort
Request Method: GET
Default sorted by '_id'
```

## Autor
Hodei para Keepcoding Web Bootcamp VIII