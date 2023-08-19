import { render } from "@testing-library/react";
import { GifGrid } from "../components/GifGrid.test";
describe("Pruebas en <GifGrid/>", () => {
  const category = "Star Wars";

  test("debe mostrar el loading inicialmente ", () => {
    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getByText("cargando..."));
  });

  test("debe mostrar items cuando se cargan las imágenes useFetchGifs ", () => {});
});
