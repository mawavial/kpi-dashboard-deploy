import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from '../components/login'


export default function Home() {


  return (
    <>
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="A simple dashboard using materialUI + nextjs" content="KPIs" />
        <link rel="icon" href="./images/report.png" />
      </Head>
      <Login />
    </div>
  </>
  )
}
