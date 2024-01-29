import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

export const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imgContainer}>
          <Image src={item.img} fill alt="" className={styles.img} />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/post/${item.slug}`}>
          {' '}
          <h1 className={styles.title}> {item.title}</h1>
        </Link>

        <p className={styles.desc}>{item.desc}</p>
        <Link className={styles.link} href={`/post/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
