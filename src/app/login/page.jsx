'use client';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import styles from './login.module.css';

export const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleSignIn = async (provider) => {
    let loadingToastId;

    try {
      loadingToastId = toast.loading('Signing in ....');

      await signIn(provider);

      toast.dismiss(loadingToastId);

      // Show success toast after loading toast is dismissed
      toast.success('Successfully signed in!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to sign in. Please try again.');
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <div className={styles.container}>
      <Toaster position="top-right" reverseOrder={false} />

      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() => handleSignIn('google')}
        >
          Sign in with Google
        </div>
      </div>
      {status === 'loading' && (
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
