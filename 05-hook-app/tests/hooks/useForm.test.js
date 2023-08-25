import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Juan Perez",
    email: "juan@perez.com",
  };

  test("debe regresar los valores por defecto ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      handleChange: expect.any(Function),
      handleResetForm: expect.any(Function),
    });
  });

  test("debe cambiar el nombre en el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleChange } = result.current;
    act(() => {
      handleChange({ target: { name: "name", value: "Roberto Sanchez" } });
    });
    expect(result.current.name).toBe("Roberto Sanchez");
  });
  test("Debe resetear el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleResetForm, handleChange } = result.current;
    act(() => {
      handleChange({ target: { name: "name", value: "Roberto Sanchez" } });
      handleResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
  });
});
