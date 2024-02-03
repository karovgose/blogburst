'use client';
import React, { useState } from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';
import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';
import { Comment, ThreeDots } from 'react-loader-spinner';

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
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const { data, error } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetchData
  );
  const handleEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setDesc(comment.desc);
  };

  const handleUpdateComment = async (comment) => {
    if (!comment || !comment.id) {
      console.error('Invalid comment object or comment ID');
      return;
    }

    setLoading(true);

    try {
      await fetch(`/api/comments`, {
        method: 'PUT',
        body: JSON.stringify({ id: comment.id, desc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      mutate(`/api/comments?postSlug=${postSlug}`);
      setEditingCommentId(null);
      setDesc('');
    } catch (error) {
      console.error('Error updating comment:', error);
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setDesc('');
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const requestBody = { desc, postSlug };

      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setDesc('');
      setLoading(false);
      mutate(`/api/comments?postSlug=${postSlug}`);
    } catch (error) {
      console.error('Error submitting comment:', error);
      setLoading(false);
    }
  };

  const handleDeleteComment = async (comment) => {
    if (!comment || !comment.id) {
      console.error('Invalid comment object or comment ID');
      return;
    }

    setLoading(true);

    try {
      await fetch(`/api/comments`, {
        method: 'DELETE',
        body: JSON.stringify({ id: comment.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      mutate(`/api/comments?postSlug=${postSlug}`);
    } catch (error) {
      console.error('Error deleting comment:', error);

      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {loading && (
        <div className={styles.loading}>
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#626262"
          />
        </div>
      )}
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
        {error && <div className={styles.error}>Error loading comments</div>}
        {!error && !data && (
          <div className={styles.loading}>
            {' '}
            <ThreeDots
              visible={true}
              height="30"
              width="30"
              color="#626262"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {data &&
          data.comments?.map((item, index) => (
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
              {status === 'authenticated' && (
                <div className={styles.editDelete}>
                  {' '}
                  <button
                    className={styles.editBtn}
                    onClick={() => handleEditComment(item)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDeleteComment(item)}
                  >
                    Delete
                  </button>
                </div>
              )}{' '}
              {editingCommentId === item.id && (
                <div className={styles.editCancel}>
                  <button
                    className={styles.updateBtn}
                    onClick={() => handleUpdateComment(item)}
                  >
                    Update
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
