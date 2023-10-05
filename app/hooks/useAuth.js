import { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import authStorage from '../auth/storage';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = async (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, login, logOut, setUser };
};

export default useAuth;
