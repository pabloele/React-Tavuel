import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "../src/CounterApp";
describe("Pruebas en CounterApp", () => {
  const value = 100;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("El contador debe comenzar en 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value.toString()
    );
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("debe incrementar con el botón +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("debe decrementar con el botón -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    screen.debug();
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("debe funcionar el boton de reset ", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    // fireEvent.click(screen.getByText("Reset"));
    screen.debug();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(value)).toBeTruthy();
  });
});
