import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un héroe por ID", () => {
    const id = 3;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({ id: 3, name: "Superman", owner: "DC" });
  });
  test("getHeroeById debe retornar undefined si no existe el id", () => {
    const id = -1;
    const heroe = getHeroeById(id);
    expect(typeof heroe).toEqual("undefined");
    expect(heroe).toBeFalsy();
  });
  test("getHeroeByOwner debe retornar un array de héroes según el owner recibido", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    switch (owner) {
      case "DC":
        expect(heroe.length).toEqual(3);
        expect(heroe).toEqual([
          { id: 1, name: "Batman", owner: "DC" },
          { id: 3, name: "Superman", owner: "DC" },
          { id: 4, name: "Flash", owner: "DC" },
        ]);
        break;
      case "Marvel":
        expect(heroe.length).toEqual(2);
        expect(heroe).toEqual([
          { id: 2, name: "Spiderman", owner: "Marvel" },
          { id: 5, name: "Wolverine", owner: "Marvel" },
        ]);
      default:
        break;
    }
  });
});
