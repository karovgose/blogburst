'use client';
import React, { useState } from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';
import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetchData
  );
  const [desc, setDesc] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment"
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.btn} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href={'/login'}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? 'loading'
          : data.comments?.map((item, index) => (
              <div className={styles.comment} key={index}>
                <div className={styles.user}>
                  {item.user.image && (
                    <Image
                      className={styles.img}
                      src={item.user.image}
                      width={50}
                      height={50}
                      alt="user"
                    />
                  )}

                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{item.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
