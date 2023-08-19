import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Star Wars";

  test("debe mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ADS",
        title: "Juan Perez",
        uri: "https://www.google.com",
      },
      {
        id: "SDA",
        title: "Perez Juan",
        uri: "https://google.com",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
