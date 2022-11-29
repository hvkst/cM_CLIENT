import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function BackendAdmin() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await fetch(BASE_URL + '/logout', {
        method: 'POST',
        credentials: 'include',
      });
      logoutUser();
      navigate('/');
    } catch (error) {
      console.warn(error.message);
    }
  };

  // if (!user) {
  //   navigate('/login');
  //   return null;
  // }

  return (
    <>
      <h1>TEst</h1>
      {user && <h1>Hello there {user.id} </h1>}
      <button onClick={logout}>Logout</button>
    </>
  );
}
export default BackendAdmin;
