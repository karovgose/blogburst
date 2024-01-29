import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  storageBucket: 'gs://blog-web-app-412608.appspot.com',
};

export const app = initializeApp(firebaseConfig);
