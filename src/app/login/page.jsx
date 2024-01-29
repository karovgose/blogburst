'use client';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';

export const Login = () => {
  const { data, status } = useSession();
  console.log(data, status);
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <div
          className={styles.socialButton}
          onClick={() => {
            signIn('google');
          }}
        >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
