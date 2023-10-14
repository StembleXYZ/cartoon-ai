import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';

import Logo from '../assets/img/logo.png';
import { metadata } from './layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <meta property="og:desc" content={metadata.description} key="description" />
      </Head>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24 bg-gradient-to-r from-violet-600 to-indigo-800 text-white">
      <Image height={200} width={200} src={Logo} alt='cartoon ai logo' className='rounded-lg' />
      <div className='text-center'>
        <h1 className="text-4xl font-bold">CartoonAI</h1>
        <p className="text-xl">Learn about anything you want from your favorite cartoon characters</p>
      </div>
      <Link href={'/chat'}><button className='px-4 py-2 bg-gray-800 rounded-lg shadow-md text-sm hover:bg-white hover:text-indigo-600 font-bold uppercase tracking-widest'>Try out CartoonAI</button></Link>
    </main>
    </>
  )
}
