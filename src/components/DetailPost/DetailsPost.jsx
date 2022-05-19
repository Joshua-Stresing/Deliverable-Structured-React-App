import React from 'react';
import usePostDetail from '../../hooks/usePostDetail';
import styles from './DetailsPost.css';

export default function DetailsPost() {
  const [post, error, loading] = usePostDetail();

  if (loading) return <h1>Loading Post Details</h1>;

  return (
    <>
      {error && <p>{error}</p>}
      <div className={styles.post} key={post.id}>
        <h1>{post.title}</h1>
        <h3>{post.name}</h3>
        <p>{post.info}</p>
        <h5 className={styles.contact}>{post.contact}</h5>
        <p>{post.created_at}</p>
      </div>
      {/* {currentUser &&
        <>
          <Link to={`/posts/${params.id}/edit`}>Edit Post</Link>
          <button onClick={deletePost}>Delete Post</button>
        </>
       } */}
    </>
  );
}
