import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' ;
import Header from './components/Header' ;
import UnderHeader from './components/UnderHeader' ;
import ContainerIcon from './components/ContainerIcon' ;
import UpFooter from './components/UpFooter' ;
import Footer from './components/Footer' ;

export default function Home() {
  return (
    <>
      <Head>
        <title> خريد ربات اينستاگرام و ربات افزایش سلبریتی فالوور
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </Head>
      <main>
        <Header />
        <UnderHeader />
        <ContainerIcon />
        <UpFooter />
      </main>
      <footer>
        <Footer />
      </footer>
      </>
  )
}
