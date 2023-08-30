import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const { name } = authState.user;

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink className='nav-item nav-link' to='/dc'>
            DC
          </NavLink>

          <NavLink className='nav-item nav-link' to='/search'>
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>{name}</span>
          <button className='nav-item nav-link btn' onClick={handleLogOut}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
