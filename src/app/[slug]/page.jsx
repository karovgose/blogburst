import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum is placeholder text</h1>
          <div className={styles.user}>
            {' '}
            <div className={styles.userImgContainer}>
              {' '}
              <Image
                src={'/mountain.jpg'}
                alt="image"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>25.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={'/mountain.jpg'}
            alt="image"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        {' '}
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum nibh tellus molestie nunc non blandit massa. Laoreet sit
              amet cursus sit amet dictum sit amet. Nullam non nisi est sit amet
              facilisis. Semper risus in hendrerit gravida rutrum quisque non
              tellus orci.
            </p>
            <h2>Lorem ipsum dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum nibh tellus molestie nunc non blandit massa. Laoreet sit
              amet cursus sit amet dictum sit amet. Nullam non nisi est sit amet
              facilisis. Semper risus in hendrerit gravida rutrum quisque non
              tellus orci.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum nibh tellus molestie nunc non blandit massa. Laoreet sit
              amet cursus sit amet dictum sit amet. Nullam non nisi est sit amet
              facilisis. Semper risus in hendrerit gravida rutrum quisque non
              tellus orci.
            </p>
          </div>
          <div className={styles.comment}>
            {' '}
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
