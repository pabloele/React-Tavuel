import { getByTestId, render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  test("Debe hacer match con el snapshot ", () => {
    const title = "Hola soy Juan Perez";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} subtitle={1234} />
    );
    // console.log(container);
    expect(container).toMatchSnapshot();
    // expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector("h1");
    // console.log(h1.innerHTML);
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);
    // expect(getByTestId("test-title")).toBeTruthy;
    // expect(getByTestId("test-title").innerHTML).toBe(title);
  });
  test("Debe mostrar el subtítulo enviado por props ", () => {
    const title = "Hola soy Juan Perez";
    const subtitle = 1234;
    const { container, getByText, getByTestId, getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle + 1)).toBeTruthy();
    // expect(getAllByText(title).length).toBe(2);
  });
});
