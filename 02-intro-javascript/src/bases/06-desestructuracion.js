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
//Desestructuración
//Asignación desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado",
};

const { nombre: nombre2, edad, clave } = persona;
console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: nombre,
    anios: edad,
    latlng: {
      lat: 14.56,
      lng: -78.544,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
