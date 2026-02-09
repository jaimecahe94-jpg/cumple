# Configuración del Backend para Dedicatorias

## 🚀 Configuración Rápida

### 1. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 2. Ejecutar el backend localmente

```bash
npm start
```

El servidor correrá en `http://localhost:3001`

### 3. Configurar el frontend

Crea un archivo `.env` en la raíz del proyecto (junto a `package.json`):

```env
VITE_API_URL=http://localhost:3001/api
```

### 4. Ejecutar el frontend

En otra terminal:

```bash
npm run dev
```

## 📦 Desplegar el Backend

### Opción Recomendada: Railway (Gratis y Fácil)

1. Ve a [railway.app](https://railway.app) y crea una cuenta
2. Crea un nuevo proyecto
3. Conecta tu repositorio de GitHub
4. Selecciona la carpeta `backend` como raíz
5. Railway detectará automáticamente Node.js
6. Una vez desplegado, copia la URL (ej: `https://tu-proyecto.railway.app`)
7. Actualiza el `.env` del frontend con:
   ```env
   VITE_API_URL=https://tu-proyecto.railway.app/api
   ```
8. Reconstruye el frontend: `npm run build`

### Alternativa: Render

1. Ve a [render.com](https://render.com)
2. Crea un nuevo "Web Service"
3. Conecta tu repositorio
4. Configuración:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Copia la URL y actualiza el `.env`

## ✅ Verificar que Funciona

1. El backend debe responder en `/health`
2. Puedes probar con:
   ```bash
   curl http://localhost:3001/api/comments
   ```
3. En el frontend, intenta publicar una dedicatoria
4. Debería aparecer inmediatamente y persistir al recargar

## 🔧 Troubleshooting

- **CORS errors**: El backend ya tiene CORS configurado
- **No se guardan comentarios**: Verifica que el backend esté corriendo y la URL en `.env` sea correcta
- **Error 404**: Asegúrate de que la URL termine en `/api` (ej: `http://localhost:3001/api`)
