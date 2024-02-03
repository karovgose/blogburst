'use client';
import React, { useEffect, useState } from 'react';
import styles from './cardList.module.css';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import { ThreeDots } from 'react-loader-spinner';

const getData = async (page, cat) => {
  const res = await fetch(`/api/posts?page=${page}&cat=${cat || ''}`);

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

export const CardList = ({ page: initialPage, cat }) => {
  const [page, setPage] = useState(parseInt(initialPage, 10));
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts, count } = await getData(page, cat);
        setPosts(posts);
        setCount(count);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, cat]);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * page < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      {loading && (
        <div className={styles.spinner}>
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#626262"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className={styles.posts}>
        {posts?.map((item, i) => (
          <Card item={item} key={i} hasNext={hasNext} hasPrev={hasPrev} />
        ))}
      </div>
      <Pagination
        page={page}
        hasPrev={hasPrev}
        hasNext={hasNext}
        setPage={setPage}
      />
    </div>
  );
};

export default CardList;
