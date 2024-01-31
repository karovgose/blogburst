// next.config.mjs

const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
      'blog-web-app-412608.appspot.com',
    ],
  },
};

export const env = {
  NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
};

export default nextConfig;
