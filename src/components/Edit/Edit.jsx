import React from 'react';
import useEdit from '../../hooks/useEdit';

export default function Edit() {
  const [title, name, info, contact, error, message, submitEdit] = useEdit();

  return (
    <div>
      {message}
      Edit Page
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Error With Edit</span>
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
        <button onClick={submitEdit}>Edit</button>
      </form>
    </div>
  );
}
