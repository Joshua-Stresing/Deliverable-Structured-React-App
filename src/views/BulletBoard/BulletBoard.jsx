import React from 'react';
// import Header from '../../components/Header';
import Post from '../../components/Post/Post';
import styles from './BulletBoard.css';

export default function BulletBoard() {
  return (
    <>
      <h1 className={styles.board_label}>Bulletin-Board</h1>
      <div className={styles.board}>
        <Post />
      </div>
    </>
  );
}
