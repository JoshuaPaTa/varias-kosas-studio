import { buscarUsuario } from "../models/UsuarioModel.js";
import { guardarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";

function iniciarSesion() {

  let correo = document.querySelector("#correo").value;
  let contrasena = document.querySelector("#clave").value;

  let auth = buscarUsuario(correo, contrasena);

  if (auth) {
    generalAlert("Bienvenido al sistema", "Sera redireccionado al catálogo de cosas", "success");
    setTimeout(() => {
        return (window.location.href ="/views/pages/cosas/cosas-view-catalogo.html");
    }, 3000)
  }
  generalAlert("Error", "Usuario y/o contraseña incorrectos", "error")
  setTimeout(() => {
    return (window.location.href = "/index.html");
  }, 3000)
}

document.querySelector("#btn-login").addEventListener("click", iniciarSesion);
