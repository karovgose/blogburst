'use client';
import Image from 'next/image';
import styles from './write.module.css';
import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';

const storage = getStorage(app);

export const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('' || 'style');

  const fileInputRef = useRef(null);
  const { data, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const upload = async () => {
      if (!file) return;

      const name = new Date().getTime() + file.name;
      console.log('Generated name:', name);
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      try {
        await uploadTask;
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setMedia(downloadURL);
      } catch (error) {
        console.error('Error during upload:', error);
      }
    };

    upload();
  }, [file]);

  const handleImageButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || 'style',
      }),
    });
    console.log(await res.json());
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="workout">workout</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>

      <div className={styles.editor}>
        <button className={styles.btn} onClick={() => setOpen(!open)}>
          <Image src={'/plus.png'} alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button className={styles.addBtn} onClick={handleImageButtonClick}>
              <Image src={'/image.png'} alt="image" width={16} height={16} />
            </button>

            <button className={styles.addBtn}>
              <Image
                src={'/external.png'}
                alt="external"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addBtn}>
              <Image src={'/video.png'} alt="video" width={16} height={16} />
            </button>
          </div>
        )}
        <textarea
          className={`${styles.textArea} ${styles.customTextArea}`}
          placeholder="Tell your story...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.publishBtn} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
  addB;
};

export default WritePage;
