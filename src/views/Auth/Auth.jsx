import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signInUser, signUpUser } from '../../services/user';

import styles from './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signInUp, setSignInUp] = useState('Sign-In');

  const { setCurrentUser } = useAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (signInUp === 'Sign-In') {
        const data = await signInUser({ email, password });
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password });
        setCurrentUser(data);
        history.push('/');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <>
        <h1
          className={signInUp === 'Sign-In' ? styles.active : styles.inactive}
          onClick={() => setSignInUp('Sign-In')}
        >
          Sign In
        </h1>
        <h1
          className={signInUp === 'Sign-Up' ? styles.active : styles.inactive}
          onClick={() => setSignInUp('Sign-Up')}
        >
          Sign Up
        </h1>
      </>
      {error && <p>{error}</p>}
      <form className="auth" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
