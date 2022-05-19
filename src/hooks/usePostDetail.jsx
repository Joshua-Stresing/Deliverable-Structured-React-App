import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPostsById } from '../services/fetchPosts';

export default function usePostDetail() {
  const [detailPosts, setDetailPost] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  //   const params = useParams();
  // ^This is going to be used to link to the edit.^
  const { id } = useParams();
  //   const history = useHistory();
  // ^This is going to be used for the remove if i put it here.^

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchPostsById(id);
        setDetailPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPost();
  }, [id]);

  return [detailPosts, error, loading];
}
