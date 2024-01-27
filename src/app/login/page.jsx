import styles from './login.module.css';

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
