import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/context';
import useClonePost from '../../hooks/useClonePost';
import usePostDetail from '../../hooks/usePostDetail';
import styles from './DetailsPost.css';

export default function DetailsPost() {
  // const [error, setError,handleClonePost] = useClonePost();
  const [post, error, loading, handleCopy] = usePostDetail();
  const { currentUser } = useUserContext();

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

      {currentUser && (
        <>
          <Link to={`/posts/${post.id}/edit`}>
            <button>Edit Post</button>
          </Link>
          {/* <button onClick={deletePost}>Delete Post</button> */}
        </>
      )}
      {currentUser.id !== post.users_id && (
        <>
          <button onClick={handleCopy}>Copy Post</button>
        </>
      )}
    </>
  );
}
