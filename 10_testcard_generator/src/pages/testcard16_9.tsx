import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from './testcard16_9.module.css'
import TestCard from '../components/testcard'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function TestCard16_9() {
  const router = useRouter()
  if(!router.isReady) {
    return;
  }
  const { width, height } = router.query

  const dimensions = { width, height }
  console.log(dimensions);

  return (
    <>
      <Head>
        <title>Blobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TestCard { ...dimensions } />
    </>
  )
}