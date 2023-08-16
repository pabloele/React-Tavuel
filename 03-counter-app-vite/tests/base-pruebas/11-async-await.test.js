import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe retornar el URL de la imágen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  test("getImagen debe retornar un error si no hay api key", async () => {
    try {
      await getImagen();
    } catch (error) {
      expect(error).toBe("apiKey is not defined");
    }
  });
});
