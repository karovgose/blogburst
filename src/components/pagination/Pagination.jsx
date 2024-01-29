'use client';
import React from 'react';
import styles from './pagination.module.css';
import { useRouter } from 'next/navigation';

const Pagination = ({ page, hasPrev, hasNext, setPage }) => {
  const router = useRouter();

  const handlePrevClick = () => {
    setPage((prevPage) => prevPage - 1);
    router.push(`?page=${page - 1}`);
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
    router.push(`?page=${page + 1}`);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.btn}
        onClick={handlePrevClick}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.btn}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
