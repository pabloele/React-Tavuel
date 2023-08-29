import { heroes } from "../data";

export const getHeroById = (id) => {
  return heroes.find((h) => h.id === id);
};
