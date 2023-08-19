import useFetchGifs from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";
describe("pruebas en useFetchGifs hook", () => {
  test("debe regresar el estado inicial ", () => {
    const { result } = renderHook(() => useFetchGifs("Starwars"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe retornar un arreglo de imágenes e isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Starwars"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
