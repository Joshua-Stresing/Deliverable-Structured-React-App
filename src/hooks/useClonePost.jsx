import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addPost } from '../services/fetchPosts';
import usePostDetail from './usePostDetail';

export default function useClonePost(originalPost) {
  //   const { id } = useParams();
  //   const [error, setError] = useState('');
  const clone = { ...originalPost };
  delete clone.id;
  addPost(clone);
  //   useEffect(() => {
  //     // usePostDetail();
  //     const clonePost = async () => {
  //       const post = await addPost(...originalPost);
  //       setPost(post);
  //     };
  //     clonePost();
  //   }, []);
  //   return [clonedPost, setPost];
}
