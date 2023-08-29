import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { pathname, search } = useLocation();
  const { authState } = useContext(AuthContext);
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);
  return authState.logged ? children : <Navigate to='login' />;
};
