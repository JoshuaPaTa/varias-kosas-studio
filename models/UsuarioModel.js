const usuarios = [
    {
        nombre: "Juan Perez Puerta",
        telefono: "555-555-5555",
        correo: "juan.perez@gmail.com",
        contrasena: "12345678",
        id: "id123456789"
    },
    {
        nombre: "Maria Lopez",   
        telefono: "555-555-5556",
        correo: "maria.lopez@gmail.com",
        contrasena: "12345678",
        id: "id123456790"
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.find((usuario) => correo == usuario.correo && contrasena == usuario.contrasena)
    return auth
}