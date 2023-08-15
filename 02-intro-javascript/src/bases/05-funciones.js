// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
const getUser = () => ({
  uid: "ABC123",
  username: "juan_perez4",
});

const user = getUser();
console.log(user);
//Tarea
//Transformar a función de flecha
//Retornar un objeto implícito
//Pruebas.

// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABC567",
//     username: nombre,
//   };
// }

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");

console.log(usuarioActivo);
