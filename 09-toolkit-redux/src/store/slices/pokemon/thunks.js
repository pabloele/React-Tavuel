import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoading());

    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await response.json();
    // console.log(data);

    const response = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    const { results } = response.data;
    // console.log("///////////", data.results);
    dispatch(setPokemons({ pokemons: results, page: page + 1 }));
  };
};
