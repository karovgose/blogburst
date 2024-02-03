import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--soft-textColor)' }}>
        Oops! It seems like the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <span
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: 'rgb(14 116 144)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            fontWeight: '600',
            marginTop: '20px',
            cursor: 'pointer',
          }}
        >
          Return Home
        </span>
      </Link>
    </div>
  );
}
