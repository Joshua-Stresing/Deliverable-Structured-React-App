import React from 'react';
import useAddPost from '../../hooks/useAddPost';

export default function AddPost() {
  const [
    title,
    name,
    info,
    contact,
    error,
    message,
    setTitle,
    setName,
    setInfo,
    setContact,
    setError,
    handleAddPost,
  ] = useAddPost();

  return (
    <>
      {message}
      Make A Note
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Testing Error</span>
        </p>
      )}
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Information:
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>

        <label>
          Contact Info:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <button onClick={handleAddPost}>Create</button>
      </form>
    </>
  );
}
