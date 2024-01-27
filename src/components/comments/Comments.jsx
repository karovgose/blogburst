import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Comments = () => {
  const status = 'autenticated';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'autenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment" className={styles.input} />
          <button className={styles.btn}>Send</button>
        </div>
      ) : (
        <Link href={'/login'}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.img}
              src={'/coding.jpg'}
              width={50}
              height={50}
              alt="user"
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>23.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nibh tellus molestie nunc non blandit massa.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.img}
              src={'/coding.jpg'}
              width={50}
              height={50}
              alt="user"
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>23.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nibh tellus molestie nunc non blandit massa.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.img}
              src={'/coding.jpg'}
              width={50}
              height={50}
              alt="user"
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>23.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nibh tellus molestie nunc non blandit massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
