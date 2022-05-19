import React from 'react';
// import Header from '../../components/Header';
import Post from '../../components/Post/Post';
import styles from './BulletBoard.css';

export default function BulletBoard() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.board}>
        <h1>Bulletin-Board</h1>
        <Post />
      </div>
    </>
  );
}
