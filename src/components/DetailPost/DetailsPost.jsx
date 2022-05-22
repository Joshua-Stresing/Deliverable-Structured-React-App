import React from 'react';
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/context';
import usePostDetail from '../../hooks/usePostDetail';
import { deletePost } from '../../services/fetchPosts';
import Edit from '../Edit/Edit';
import styles from './DetailsPost.css';

export default function DetailsPost() {
  const [post, error, loading, handleCopy] = usePostDetail();
  const { currentUser } = useUserContext();
  const { id } = useParams();
  const history = useHistory();
  if (loading) return <h1>Loading Post Details</h1>;

  const removePost = async () => {
    await deletePost(id);
    history.push('/');
  };

  return (
    <>
      {error && <p>{error}</p>}
      <div className={styles.post} key={post.id}>
        <h1>{post.title}</h1>
        <h3>{post.name}</h3>
        <p>{post.info}</p>
        <h5 className={styles.contact}>{post.contact}</h5>
        <p>{post.created_at}</p>
        {currentUser.id === post.users_id && (
          <>
            <button onClick={removePost}>Delete Post</button>
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
      </div>
      <div>
        {/* <Route exact path={`/posts/:id/edit`}>
          <Edit />
        </Route> */}
      </div>
    </>
  );
}
