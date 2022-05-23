import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/context';
import { signOutUser } from '../../services/user';

export default function Header() {
  const { currentUser } = useUserContext();

  const logOut = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <>
      {currentUser.email && (
        <div>
          <button onClick={logOut}>Sign Out</button>
          <Link to={'/add'}>
            <button>Make A Post</button>
          </Link>
          <h1>Welcome: ({currentUser.email})</h1>
        </div>
      )}
    </>
  );
}
