import { useState } from "react";
import Message from "./Message";
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "jperez",
    email: "juan@perez.com",
  });

  const { username, email } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     console.log("useEffect");
  //   }, []);

  //   useEffect(() => {
  //     console.log("formState changed");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("email changed");
  //   }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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
      {username === "jperez2" && <Message />}
    </>
  );
};

export default SimpleForm;
