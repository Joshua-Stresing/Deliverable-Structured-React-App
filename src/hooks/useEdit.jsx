import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { editPost, fetchPostsById } from '../services/fetchPosts';

export default function useEdit() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetchPostsById(id);
      setTitle(data.title);
      setName(data.name);
      setInfo(data.info);
      setContact(data.contact);
      setError(data.error);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editPost({ id, title, name, info, contact });
      setMessage('Edit completed.');
      setTimeout(() => history.push(`/posts/${id}`), 3500);
    } catch (e) {
      setError('edit has failed');
    }
  };

  return [title, name, info, contact, error, message, handleSubmit];
}
