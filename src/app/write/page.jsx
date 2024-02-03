'use client';
import Image from 'next/image';
import styles from './write.module.css';
import { ThreeDots } from 'react-loader-spinner';
import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import CustomToaster from '@/components/Toaster';
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
  const [loading, setLoading] = useState(false);
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

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      try {
        await uploadTask;
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setMedia(downloadURL);
        toast.success('Image uploaded successfully!');
      } catch (error) {
        console.error('Error during upload:', error);
        toast.error('Error uploading image.😢');
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
    setLoading(true);
    try {
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
      const data = await res.json();
      setLoading(false);
      if (data.error) {
        toast.error('Error uploading post. Please try again.');
      } else {
        toast.success('Post uploaded successfully!');

        router.push(`/`);
      }
      return data;
    } catch (error) {
      console.error('Error writing data:', error);
      toast.error('Error uploading post. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <CustomToaster />
      {loading && (
        <div className={styles.spinner}>
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#626262"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
        disabled={loading}
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
          </div>
        )}
        <textarea
          className={`${styles.textArea} ${styles.customTextArea}`}
          placeholder="Tell your story...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={styles.publishBtn}
          onClick={handleSubmit}
          disabled={loading}
        >
          Publish
        </button>
      </div>
    </div>
  );
  addB;
};

export default WritePage;
