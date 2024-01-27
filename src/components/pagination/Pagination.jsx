import React from 'react';
import styles from './pagination.module.css';

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Previous</button>
      <button className={styles.btn}>Next</button>
    </div>
  );
};

export default Pagination;
