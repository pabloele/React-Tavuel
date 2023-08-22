import { useCounter, useFetch } from "../hooks";
import { Character, LoadingCharacter } from "./";

const url = "https://rickandmortyapi.com/api/character/";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`${url}${counter}`);
  console.log({ data, isLoading, hasError });

  const { name, status, image } = data ? data : {};
  console.log(name, status);

  return (
    <>
      <h1>Rick And Morty CHARACTERS</h1>
      <hr />
      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <Character name={name} status={status} image={image} />
      )}

      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Next character
      </button>
    </>
  );
};

export default MultipleCustomHooks;
