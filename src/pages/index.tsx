import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Prefectures } from '../components/Prefectures'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>都道府県別人口推移</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🇯🇵</text></svg>"
        />
      </Head>

      <main className={styles.main}>
        <Prefectures />
      </main>
    </>
  )
}

export default Home
