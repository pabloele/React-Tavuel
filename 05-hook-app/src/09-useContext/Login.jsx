import { useContext } from "react";
import { UserContext } from "./userContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />
      {user ? <h1>{JSON.stringify(user)}</h1> : null}
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            email: "pablo@pablo.com",
            password: "123456789",
          })
        }
      >
        Login
      </button>
    </>
  );
};
