import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={'https://www.facebook.com/'} target="blank">
          <Image
            src={'/facebook.png'}
            alt="facebook-icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href={'https://www.instagram.com/'} target="blank">
          <Image
            src={'/instagram.png'}
            alt="instagram-icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href={'https://www.youtube.com/'} target="blank">
          <Image
            src={'/youtube.png'}
            alt="youtube-icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <Link href={'/'} className={styles.logo}>
        BlogBurst
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href={'/'}>
          Home
        </Link>
        <Link className={styles.link} href={'#contact'}>
          Contact
        </Link>
        <Link className={styles.link} href={'#about'}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
