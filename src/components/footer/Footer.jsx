import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>BlogBurst</h1>
        </div>
        <p className={styles.desc}>
          Thank you for exploring the captivating world of BlogBurst! Dive into
          a realm of inspiring stories, creative ideas, and thought-provoking
          content. Stay connected with us as we continue to unfold new chapters
          of inspiration and discovery. Your journey with BlogBurst is just
          beginning; let your curiosity lead the way. Happy reading!.
        </p>
        <div className={styles.icons}>
          <Image src={'/facebook.png'} alt="facebook" width={18} height={18} />
          <Image
            src={'/instagram.png'}
            alt="instagram"
            width={18}
            height={18}
          />
          <Image src={'/youtube.png'} alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          {' '}
          <span className={styles.listTitle}>Links</span>
          <Link href={'/'}>Home</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
        </div>
        <div className={styles.list}>
          {' '}
          <span className={styles.listTitle}>Tags</span>
          <Link href={'/blog?cat=style'}>Style</Link>
          <Link href={'/blog?cat=travel'}>Travel</Link>
          <Link href={'/blog?cat=fashion'}>Fashion</Link>
          <Link href={'/blog?cat=workout'}>Workout</Link>
          <Link href={'/blog?cat=coding'}>Coding</Link>
        </div>
        <div className={styles.list}>
          {' '}
          <span className={styles.listTitle}>Social</span>
          <Link href={'/'}>Facebook</Link>
          <Link href={'/'}>Instagram</Link>
          <Link href={'/'}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
