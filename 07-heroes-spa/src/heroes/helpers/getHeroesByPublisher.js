import { heroes } from '../data';

export const getHeroesByPublisher = (publisher) => {
  // console.log(publisher);
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} no existe`);
  }
  // console.log(heroes.filter((h) => h.publisher === publisher));
  return heroes.filter((h) => h.publisher === publisher);
};
