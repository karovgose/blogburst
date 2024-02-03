'use client';
import React, { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const AuthLinks = () => {
  const { status } = useSession();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setOpen(false);
  };

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href={'/login'} className={styles.link} onClick={handleLinkClick}>
          Login
        </Link>
      ) : (
        <>
          <Link
            className={styles.link}
            href={'/write'}
            onClick={handleLinkClick}
          >
            Write
          </Link>
          <span
            className={styles.link}
            onClick={() => {
              signOut();
              handleLinkClick();
            }}
          >
            Logout
          </span>
        </>
      )}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={'/'} onClick={handleLinkClick}>
            Home
          </Link>
          <Link href={'/'} onClick={handleLinkClick}>
            Contact
          </Link>
          <Link href={'/'} onClick={handleLinkClick}>
            About
          </Link>
          {status === 'unauthenticated' ? (
            <Link href={'/login'} onClick={handleLinkClick}>
              Login
            </Link>
          ) : (
            <>
              <Link href={'/write'} onClick={handleLinkClick}>
                Write
              </Link>
              <span
                className={styles.link}
                onClick={() => {
                  signOut();
                  handleLinkClick();
                }}
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
