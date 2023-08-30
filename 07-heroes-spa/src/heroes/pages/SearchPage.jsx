import { useLocation, useNavigate } from 'react-router-dom';
// import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';

import { HeroCard, getHeroesByName } from '../../heroes';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const { q = '' } = queryString.parse(location.search);
  const q = location.search.split('=')[1];
  // console.log('///////////////////', qValue);

  // // console.log('//////////////////////////////////', q);
  const heroes = getHeroesByName(q);

  const { searchText, handleInputChange } = useForm({
    searchText: q,
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim() <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit} aria-label='form'>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: q?.length === 0 ? '' : 'none' }}
            aria-label='searchHero'
          >
            Search a hero
          </div>
          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{
              display: heroes.length === 0 && q?.length > 1 ? '' : 'none',
            }}
            aria-label='alertNoHero'
          >
            No results with <b>{q}</b>
          </div>
          {heroes.map((h) => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  );
};
