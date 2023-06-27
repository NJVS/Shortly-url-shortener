import styles from './Home.module.scss';
import Hero from './components/Hero/Hero';
import ShortUrl from './components/ShortUrl/ShortUrl';
import Statistics from './components/Statistics/Statistics';
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>Shortly</title>
        <meta name="title" content="Frontend Mentor | URL Shortening API" />
        <meta name="description" content="Shortly is a tool to shorten a long link. Use our URL shortener to create a short URL and share it on sites, chat and emails." />
        <meta name="keywords" content="Url Shortener, Short URL" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>
      <Hero />
      <ShortUrl />
      <Statistics />
    </main>
  )
}

export default Home