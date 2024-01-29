import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';
const getData = async (slug) => {
  const apiUrl = `http://localhost:3000/api/posts/${slug}?popular=true`;
  console.log('API URL:', apiUrl);

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch data:', res.statusText);
      throw new Error('Failed');
    }

    return res.json();
  } catch (error) {
    console.error('Error during data fetching:', error);
    throw error;
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.post.title}</h1>

          <div className={styles.user}>
            {' '}
            {data.post.user.image && (
              <div className={styles.userImgContainer}>
                {' '}
                <Image
                  src={data.post.user.image}
                  alt="avatar"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{data.post.user.name}</span>
              <span className={styles.date}>
                {data.post.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
          <div className={styles.views}>Views: {data.post.views}</div>
        </div>
        {data.post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={data.post.img}
              alt="image"
              fill
              className={styles.img}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        {' '}
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>{data.post.desc}</p>
          </div>
          <div className={styles.comment}>
            {' '}
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
