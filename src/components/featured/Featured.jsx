import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome!</b> Explore a world of captivating stories and creative
        ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={'/featured-img.jpg'}
            alt="featured image"
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </h1>
          <p className={styles.postDes}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className={styles.postBtn}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
