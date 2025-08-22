const btnEnviar = document.getElementById('btnEnviar');
const inputNombre = document.getElementById('inputNombre');
const inputEmail = document.getElementById('inputEmail');
const inputCiudad = document.getElementById('inputCiudad');

// Variable compartida para las  funciones
let usuario = {
    nombre: inputNombre.value,
    email: inputEmail.value,
    ciudad: inputCiudad.value
};

function obtenerUsuarioCallback(callback) {      
    
    setTimeout(() => {
        callback(usuario);
    }, 2000);
}

function mostrarUsuario(usuario) {
    console.log(`Callback - El usuario es ${usuario.nombre} y su email es ${usuario.email}`);
}

// Función simple que retorna una Promise
function obtenerUsuarioPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Usar la variable compartida
            resolve(usuario);
        }, 2000);
    });
}

// Función usando async/await
async function obtenerUsuarioAsync() {
    try {
        // Simular operación asíncrona
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Retornar los datos del usuario
        return usuario;
    } catch (error) {
        console.error('Error en async/await:', error);
        throw error;
    }
}

btnEnviar.addEventListener('click', () => {
    
    obtenerUsuarioCallback(mostrarUsuario);    
    
    obtenerUsuarioPromesa()
        .then(usuario => {
            console.log(`Promesa - Nombre: ${usuario.nombre}`);
            console.log(`Promesa - Ciudad: ${usuario.ciudad}`);
        });

    
    obtenerUsuarioAsync()
        .then(usuario => {
            console.log(`Async/Await - Nombre: ${usuario.nombre}`);
            console.log(`Async/Await - Email: ${usuario.email}`);
            console.log(`Async/Await - Ciudad: ${usuario.ciudad}`);
        })
        .catch(error => {
            console.error('Error en async/await:', error);
        });
});
