import React from 'react';
import usePostDetail from '../../hooks/usePostDetail';

export default function DetailsPost() {
  const [detailPosts, error, loading] = usePostDetail();

  if (loading) return <h1>Loading Post Details</h1>;

  return (
    <>
      {error} && <p>{error}</p>
      <div className={styles.post} key={posts.id}>
        <h1>{post.title}</h1>
        <p>{post.created_at}</p>
        <h3>{post.name}</h3>
        <p>{post.info}</p>
        <h3>{post.contact}</h3>
      </div>
    </>
  );
}
