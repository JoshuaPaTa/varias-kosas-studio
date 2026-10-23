export function tokenGenerator(longitud = 32) {
  const caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    token += caracteres.charAt(indiceAleatorio);
  }
  return token;
}
