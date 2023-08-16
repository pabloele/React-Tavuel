import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("debe devolver un objeto héroe a partir del objeto persona recibido", () => {
    const persona = {
      nombre: "Tony",
      edad: 45,
      clave: "Ironman",
    };

    const personaTest = {
      nombreClave: persona.clave,
      anios: persona.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const result = usContext(persona);

    expect(personaTest).toEqual(result);
  });
});
