import { useForm } from "../hooks";

const FormWithCustomHook = () => {
  const { username, password, email, handleChange, handleResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, password, email } = formState;
  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button className="btn btn-primary mt-2" onClick={handleResetForm}>
        Borrar
      </button>
    </>
  );
};

export default FormWithCustomHook;
