import styles from './page.module.css';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
export default function Home({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
      <section id="contact" className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <div className={styles.contactContent}>
          <p>
            Feel free to reach out to us for any inquiries. We can be contacted
            via the following:
          </p>
          <p>Email: karovgose7@gmail.com</p>
          <p>Phone: +38971956354</p>
        </div>
      </section>
      <section id="about" className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>About My Blog</h1>
        <div className={styles.aboutContent}>
          <p>
            Welcome to BlogBurst! Here, I share captivating stories and creative
            ideas on various topics. Embark on a journey through the vast realms
            of inspiration and immerse yourself in thought-provoking content.
          </p>
          <p>
            At BlogBurst, we believe in the power of storytelling to connect,
            inspire, and ignite imagination. Our mission is to bring you
            high-quality content that sparks curiosity, fosters creativity, and
            cultivates a sense of community among our readers.
          </p>
        </div>
      </section>
    </div>
  );
}
