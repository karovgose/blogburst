'use client';
import React, { useEffect, useState } from 'react';
import styles from './menuPosts.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ThreeDots } from 'react-loader-spinner';

export const MenuPosts = ({ withImage }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/posts/top-posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.topViewedPosts || []);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className={styles.items}>
      {loading && (
        <ThreeDots
          visible={true}
          height="30"
          width="30"
          color="#626262"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {posts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.id} className={styles.item}>
          {withImage && (
            <div className={styles.imgContainer}>
              <Image
                src={post.img}
                fill
                alt={post.title}
                className={styles.img}
              />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.category]}`}>
              {post.category}
            </span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>{post.user.name}</span>
              <span className={styles.date}>
                {' '}
                - {post.createdAt.slice(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
