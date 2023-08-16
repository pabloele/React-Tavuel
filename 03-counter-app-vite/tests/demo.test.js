describe("Pruebas en <DEmoComponent/>", () => {
  test("Esta prueba no debe fallar", () => {
    //inicialización
    const message1 = "Hola mundo";

    //estímulo
    const message2 = message1.trim();

    //Observación del comportamiento esperado
    expect(message1).toBe(message2);
  });
});
