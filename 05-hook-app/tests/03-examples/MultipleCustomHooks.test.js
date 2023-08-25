import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  useFetch.mockReturnValue({
    data: {
      name: "",
      status: "",
      image: "",
    },
    isLoading: true,
    hasError: null,
  });
  test("debe mostrar el componente por defecto ", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading"));
    expect(screen.getByText("Rick And Morty CHARACTERS"));
    // screen.debug();
    const nextButton = screen.getByRole("button", { name: "Next character" });
    expect(nextButton.disabled).toBeTruthy();
    // console.log(nextButton.disabled);
  });

  test("debe mostrar un character ", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Rick Sanchez",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText("Rick Sanchez")).toBeTruthy();
    expect(screen.getByText("Alive")).toBeTruthy();
    const img = screen.getByRole("img");
    // console.log("************", img.src);
    expect(img.src).toBe(
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
    const nextButton = screen.getByRole("button", {
      name: "Next character",
    });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe llamar la función increment ", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Rick Sanchez",
        status: "Alive",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", {
      name: "Next character",
    });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
