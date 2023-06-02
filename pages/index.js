import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="{styles.container}">
      <Head>
        <h1 className="title">
          Hello from 
          <Link href="https://nextjs.org/">NextJS!</Link>
        </h1>
      </Head>
      <footer>
      </footer>
    </div>
  )
}
