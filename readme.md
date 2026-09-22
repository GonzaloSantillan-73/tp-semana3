# API Libros y Autores

## Integrantes
* Santillan, Gonzalo Luis , MU: 00320
* Molas Gaitan, Camila , MU: 00366

## Requisitos
* Node.js 24 LTS

## Instalación
```bash
npm install

```

## Ejecución

```bash
npm run dev

```

## Endpoints

| Método | Ruta         | Descripción               |
| GET    | /            | Mensaje de bienvenida     |
| GET    | /info        | Información de la API     |
| GET    | /libros      | Lista todos los libros    |
| GET    | /libros/:id  | Obtiene un libro por ID   |
| POST   | /libros      | Crea un nuevo libro       |
| PUT    | /libros/:id  | Actualiza un libro por ID |
| DELETE | /libros/:id  | Elimina un libro por ID   |
| GET    | /autores     | Lista todos los autores   |
| GET    | /autores/:id | Obtiene un autor por ID   |
| POST   | /autores     | Crea un nuevo autor       |
| PUT    | /autores/:id | Actualiza un autor por ID |
| DELETE | /autores/:id | Elimina un autor por ID   |
