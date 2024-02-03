'use client';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import styles from './login.module.css';

export const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleSignIn = async (provider) => {
    try {
      setLoading(true);
      await signIn(provider);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Display error toas
      toast.error('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() => handleSignIn('google')}
        >
          Sign in with Google
        </div>
      </div>
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
    </div>
  );
};

export default Login;
