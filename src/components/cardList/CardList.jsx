'use client';
import React, { useEffect, useState } from 'react';
import styles from './cardList.module.css';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const getData = async (page, cat) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/posts?page=${page}&cat=${cat || ''}`);

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

export const CardList = ({ page: initialPage, cat }) => {
  const [page, setPage] = useState(parseInt(initialPage, 10));
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts, count } = await getData(page, cat);
        setPosts(posts);
        setCount(count);
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
