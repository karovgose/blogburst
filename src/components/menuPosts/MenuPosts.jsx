import React from 'react';
import styles from './menuPosts.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      {' '}
      <Link href={'#'} className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              src={'/mountain.jpg'}
              fill
              alt="mountain"
              className={styles.img}
            />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel} `}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href={'#'} className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              src={'/mountain.jpg'}
              fill
              alt="mountain"
              className={styles.img}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.workout} `}>
            Workout
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href={'#'} className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              src={'/mountain.jpg'}
              fill
              alt="mountain"
              className={styles.img}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion} `}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href={'#'} className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              src={'/mountain.jpg'}
              fill
              alt="mountain"
              className={styles.img}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food} `}>Food</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.01.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
