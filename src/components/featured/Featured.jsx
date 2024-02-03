'use client';
import React, { useEffect, useState } from 'react';
import styles from './featured.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ThreeDots } from 'react-loader-spinner';

export const Featured = () => {
  const [mostViewedPost, setMostViewedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/posts/most-viewed`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setMostViewedPost(data.mostViewedPost);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome!</b> Explore a world of captivating stories and creative
        ideas.
      </h1>
      {!mostViewedPost ? (
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
      ) : (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={mostViewedPost.img}
              alt="featured image"
              fill
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{mostViewedPost.title}</h1>
            <p className={styles.postDes}>
              {mostViewedPost.desc.slice(0, 160) + '...'}
            </p>
            <Link
              href={`/post/${mostViewedPost.slug}`}
              className={styles.postBtn}
            >
              Read more
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
