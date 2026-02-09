# Backend para Dedicatorias de Cumpleaños

Backend simple con Express para guardar y obtener las dedicatorias de cumpleaños.

## Instalación

```bash
cd backend
npm install
```

## Ejecutar localmente

```bash
npm start
```

El servidor correrá en `http://localhost:3001`

## Endpoints

- `GET /api/comments` - Obtener todos los comentarios
- `POST /api/comments` - Añadir un nuevo comentario
  - Body: `{ "name": "Nombre", "text": "Texto del comentario" }`
- `GET /health` - Health check

## Desplegar

### Opción 1: Railway (Recomendado - Gratis)

1. Ve a [railway.app](https://railway.app)
2. Crea una cuenta y nuevo proyecto
3. Conecta tu repositorio de GitHub
4. Selecciona la carpeta `backend`
5. Railway detectará automáticamente Node.js y ejecutará `npm start`
6. Copia la URL que te da Railway (algo como `https://tu-proyecto.railway.app`)
7. En el frontend, crea un archivo `.env` con:
   ```
   VITE_API_URL=https://tu-proyecto.railway.app/api
   ```

### Opción 2: Render (Gratis)

1. Ve a [render.com](https://render.com)
2. Crea una cuenta y nuevo "Web Service"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Copia la URL y configúrala en el frontend

### Opción 3: Vercel (Gratis)

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio
3. Configura:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Output Directory: (dejar vacío)
4. Añade un archivo `vercel.json` en la carpeta backend:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

## Variables de Entorno

Puedes crear un archivo `.env` en la carpeta backend:

```
PORT=3001
```

## Notas

- Los comentarios se guardan en `comments.json` en la carpeta backend
- Este archivo se crea automáticamente cuando se añade el primer comentario
- En producción, considera usar una base de datos real (MongoDB, PostgreSQL, etc.)
