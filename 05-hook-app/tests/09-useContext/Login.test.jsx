import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/Login";
import { UserContext } from "../../src/09-useContext/userContext";
describe("Pruebas en <LoginPage/>", () => {
  test("debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("");
    // console.log("*******************", preTag);
  });

  test("debe llamar el setUSer cuando se hace click en le boton", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({
      email: "pablo@pablo.com",
      password: "123456789",
    });
  });
});
