import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPosts } from '../services/fetchPosts';

export default function usePost() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchPosts();
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPost();
  }, []);

  return [posts, loading, error];
}
