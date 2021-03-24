import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Poll</title>
      </Head>

      <Layout>
        Poll list
      </Layout>
    </div>
  )
}
