import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/assets/heroes/${id}.jpg`;

  // console.log(heroImage);
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4 '>
            <img src={heroImage} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              {alter_ego !== characters && (
                <p className='card-text'>{characters}</p>
              )}
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
        <h1 key={id}>{superhero}</h1>
      </div>
    </div>
  );
};
