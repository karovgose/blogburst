import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href={'/blog?category=style'}
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={'/style.jpg'}
            width={32}
            height={32}
            alt="style"
            className={styles.img}
          />
          travel
        </Link>
        <Link
          href={'/blog?category=travel'}
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src={'/travel.jpg'}
            width={32}
            height={32}
            alt="travel"
            className={styles.img}
          />
          travel
        </Link>
        <Link
          href={'/blog?category=food'}
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src={'/food.jpg'}
            width={32}
            height={32}
            alt="food"
            className={styles.img}
          />
          food
        </Link>
        <Link
          href={'/blog?category=fashion'}
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src={'/fashion.jpg'}
            width={32}
            height={32}
            alt="fashion"
            className={styles.img}
          />
          fashion
        </Link>
        <Link
          href={'/blog?category=workout'}
          className={`${styles.category} ${styles.workout}`}
        >
          <Image
            src={'/workout.jpg'}
            width={32}
            height={32}
            alt="workout"
            className={styles.img}
          />{' '}
          workout
        </Link>
        <Link
          href={'/blog?category=coding'}
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src={'/coding.jpg'}
            width={32}
            height={32}
            alt="coding"
            className={styles.img}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
