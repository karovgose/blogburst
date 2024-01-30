import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

export const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item._id}
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.title]}`}
          >
            {item.img && (
              <Image
                src={`${item.img}`}
                width={32}
                height={32}
                alt={`${item.slug}`}
                className={styles.img}
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
