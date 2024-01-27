import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={'/mountain.jpg'}
          fill
          alt="mountain"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.01.2024 - </span>
          <span className={styles.category}>TRAVEL</span>
        </div>
        <Link href={'#'}>
          {' '}
          <h1 className={styles.title}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo ...
        </p>
        <Link className={styles.link} href={'#'}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
