import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addPost } from '../services/fetchPosts';

export default function useAddPost() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      await addPost({ title, name, info, contact });
      setMessage('New Note Successfully Added');
      setTimeout(() => history.push('/'), 3500);
    } catch (error) {
      setError('Make Sure Your Fields Are Filled In!');
    }
  };
  return [
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
  ];
}
