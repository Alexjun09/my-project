import { Html, Head, Main, NextScript } from 'next/document'
import styles from '@/styles/Home.module.css'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-96'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
