import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPostsById } from '../services/fetchPosts';

export default function usePostDetail() {
  const [detailPosts, setDetailPost] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
          const data = await fetchPostsById();
          setDetailPost(data);
          setLoading(false);
      } catch (error) {
          setError(error.message)
      }
    };
    fetchPost();
  }, []);

  return [detailPosts, error, loading];
}
