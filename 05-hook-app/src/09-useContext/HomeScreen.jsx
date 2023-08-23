import { useContext } from "react";
import { UserContext } from "./userContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Home Screen</h1>
      <hr />
      {user ? <h1>{JSON.stringify(user)}</h1> : null}
    </>
  );
};
