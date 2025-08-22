# M5AE4-ABP4: Callbacks, Promesas y Async/Await

## 📋 Descripción del Proyecto

Este proyecto demuestra las tres formas principales de manejar operaciones asíncronas en JavaScript:
- **Callbacks** (enfoque tradicional)
- **Promesas** con `.then()` y `.catch()`
- **Async/Await** (enfoque moderno)

El proyecto simula la obtención de datos de usuario a través de diferentes métodos asíncronos, mostrando cómo cada enfoque maneja la asincronía.

## 🚀 Funcionalidades

### ✅ Formulario de Usuario
- Campo de nombre
- Campo de email
- Campo de ciudad
- Botón de envío

### ✅ Tres Métodos Asíncronos
1. **Callbacks**: Función tradicional con callback
2. **Promesas**: Uso de Promises con `.then()`
3. **Async/Await**: Función async con await

## 🏗️ Estructura del Proyecto

```
M5AE4-ABP4/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos del proyecto
│   └── js/
│       └── script.js      # Lógica JavaScript
└── README.md              # Este archivo
```

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3**: Estilos y diseño
- **JavaScript ES6+**: Lógica de programación
- **Promises API**: Manejo de promesas nativas
- **Async/Await**: Sintaxis moderna para asincronía

## 🔧 Cómo Funciona

### 1. **Inicialización**
- Al cargar la página, se seleccionan los elementos del DOM
- Se inicializa la variable compartida `usuario`

### 2. **Captura de Datos**
- El usuario llena los campos del formulario
- Al hacer clic en "Enviar", se capturan los valores actuales

### 3. **Procesamiento Asíncrono**
- **Callbacks**: Se ejecuta `obtenerUsuarioCallback()` que espera 2 segundos
- **Promesas**: Se ejecuta `obtenerUsuarioPromesa()` que retorna una Promise
- **Async/Await**: Se ejecuta `obtenerUsuarioAsync()` usando sintaxis moderna

### 4. **Resultados**
- Después de 2 segundos, cada método muestra los datos del usuario
- Los resultados se muestran en la consola del navegador

## 📱 Cómo Usar

### **Paso 1: Abrir el Proyecto**
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd M5AE4-ABP4

# Abrir en el navegador
# Opción 1: Doble clic en index.html
# Opción 2: Servidor local (recomendado)
```

### **Paso 2: Usar el Formulario**
1. Abrir `index.html` en el navegador
2. Llenar los campos:
   - **Nombre**: Tu nombre completo
   - **Email**: Tu dirección de correo
   - **Ciudad**: Tu ciudad de residencia
3. Hacer clic en el botón "Enviar"

### **Paso 3: Ver Resultados**
1. Abrir la consola del navegador (F12)
2. Observar los logs que aparecen después de 2 segundos:
   ```
   Callback - El usuario es [nombre] y su email es [email]
   Promesa - Nombre: [nombre]
   Promesa - Ciudad: [ciudad]
   Async/Await - Nombre: [nombre]
   Async/Await - Email: [email]
   Async/Await - Ciudad: [ciudad]
   ```

## 🔍 Análisis del Código

### **Variable Compartida**
```javascript
let usuario = {
    nombre: inputNombre.value,
    email: inputEmail.value,
    ciudad: inputCiudad.value
};
```
- Variable global que comparten todas las funciones
- Se actualiza en cada clic del botón

### **Función Callback**
```javascript
function obtenerUsuarioCallback(callback) {      
    setTimeout(() => {
        callback(usuario);
    }, 2000);
}
```
- Enfoque tradicional con callback
- Simula operación asíncrona con `setTimeout`

### **Función Promise**
```javascript
function obtenerUsuarioPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuario);
        }, 2000);
    });
}
```
- Retorna una Promise
- Usa `.then()` para manejar el resultado

### **Función Async/Await**
```javascript
async function obtenerUsuarioAsync() {
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return usuario;
    } catch (error) {
        console.error('Error en async/await:', error);
        throw error;
    }
}
```
- Función async con manejo de errores
- Usa `await` para esperar la Promise

## 🎯 Casos de Uso

### **Callbacks**
- ✅ Simple y directo
- ❌ Callback hell en operaciones complejas
- 🔧 Ideal para operaciones simples

### **Promesas**
- ✅ Mejor manejo de errores
- ✅ Encadenamiento de operaciones
- 🔧 Ideal para operaciones secuenciales

### **Async/Await**
- ✅ Código más legible
- ✅ Manejo de errores con try/catch
- 🔧 Ideal para operaciones complejas

## 🚨 Solución de Problemas

### **No aparecen logs en la consola**
1. Verificar que la consola esté abierta (F12)
2. Asegurar que no haya filtros activos
3. Recargar la página (F5)

### **Error "usuario is not defined"**
1. Verificar que todos los campos tengan valores
2. Comprobar que el script se esté cargando correctamente

### **Problemas en Firefox**
1. Verificar configuración de la consola
2. Asegurar que `devtools.console.enabled` esté en `true`

## 📚 Recursos Adicionales

- [MDN - Callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [MDN - Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Async/Await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

## 👨‍💻 Autor

Desarrollado como parte del Módulo 5 del Bootcamp de Desarrollo Front-end.

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

---

**Nota**: Este proyecto está diseñado para demostrar conceptos de programación asíncrona en JavaScript. Los tiempos de espera de 2 segundos son simulados para fines educativos.
