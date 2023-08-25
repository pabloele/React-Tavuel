import { render, screen } from "@testing-library/react";
import { HomeScreen } from "../../src/09-useContext/HomeScreen";
import { UserContext } from "../../src/09-useContext/userContext";
describe("Pruebas en <HomePage />", () => {
  const user = {
    id: 1,
    name: "Juan Perez",
  };

  test("debe mostrar el componente sin el usuario ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomeScreen />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomeScreen />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
