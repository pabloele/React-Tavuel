import { getByTestId, render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola soy el título";
  const subtitle = 789654;
  test("debe hacer match con el snapshot ", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('debe mostrar el mensaje "Hola soy el título"', () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
    // expect(screen.getByText(title)).not.toBeTruthy();
  });
  test("debe mostrar el título en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
  test("debe mostrar el subtítulo enviado por props ", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByText(subtitle + 1)).toBeTruthy();
  });
});
