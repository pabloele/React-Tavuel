import { fireEvent, render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";
describe("Pruebas en <MainApp/>", () => {
  test("debe mostrar el HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText("Home")).toBeTruthy();
  });

  test("debe mostrar el Login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
  });
  test("debe mostrar el About", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
  });
});
