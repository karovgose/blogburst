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
          {' '}
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
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
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        <div className={styles.list}>
          {' '}
          <span className={styles.listTitle}>Tags</span>
          <Link href={'/'}>Style</Link>
          <Link href={'/'}>Travel</Link>
          <Link href={'/'}>Fashion</Link>
          <Link href={'/'}>Workout</Link>
          <Link href={'/'}>Coding</Link>
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
