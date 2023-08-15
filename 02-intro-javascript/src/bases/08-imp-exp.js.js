// import { heroes } from "../src/data/heroes";
import heroes, { owners } from "../data/heroes";
// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
console.log(owners);
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(1));

export const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner("DC"));
