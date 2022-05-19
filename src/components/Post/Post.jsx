import React from 'react';
import { Link } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import styles from './Post.css';

export default function Post() {
  //below values can be renamed but need to be in order
  const [posts, loading, error] = usePost();

  if (loading) return <h1>Loading Posts</h1>;

  return (
    <>
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <div className={styles.post} key={post.id}>
            <h3>{post.name}</h3>
            <h3>{post.title}</h3>
          </div>
        </Link>
      ))}
    </>
  );
}
