import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPostsById } from '../services/fetchPosts';
import useClonePost from './useClonePost';

export default function usePostDetail() {
  const [detailPosts, setDetailPost] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  //   const [clonedPost, setPost] = useState(null);

  const handleCopy = () => {
    useClonePost(detailPosts);
    history.push(`/`);
  };

  const deletePost = () => {};

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
        console.log(data);
      } catch (error) {
        setError('failed to fetch post by id');
      }
    };
    fetchPost();
  }, [id]);

  return [detailPosts, error, loading, handleCopy];
}
