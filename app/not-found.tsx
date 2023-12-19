'use client';
import '@/styles/not-found.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const goBack = () => router.push('/');

  return (
    <>
      <section className="error-container mt-40">
        <span className="four"></span>
        <span className="zero"></span>
        <span className="four"></span>
      </section>
      <div className="mt-10 flex flex-col items-center">
        <p>
          <b>Oops!</b> This page doesn&apos;t exist{' '}
        </p>
        <div className="mt-10 flex flex-col">
          <p >The page you were looking for does not exist.</p>
          <p className="mt-5">
            You can try to{' '}
            <span className="cursor-pointer font-medium" onClick={goBack}>
              go back
            </span>{' '}
            or continue to{' '}
            <Link className="font-medium" href="/">
              Aposta GPT
            </Link>
            .
          </p>
          <p className="mt-5">
            If you have any questions, don&apos;t hesitate to contact us at:{' '}
            <a className="font-medium" href="https://www.instagram.com/apostagpt">
              https://www.instagram.com/apostagpt
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
