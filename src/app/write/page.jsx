'use client';
import Image from 'next/image';
import styles from './write.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useState } from 'react';

export const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.btn}>
          <Image src={'/plus.png'} alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addBtn}>
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
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story...."
        />
        <button className={styles.publishBtn}>Publish</button>
      </div>
    </div>
  );
  addB;
};

export default WritePage;
