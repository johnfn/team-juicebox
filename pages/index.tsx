import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Team Juicebox Games</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Team Juicebox Games
        </h1>

        <p className={styles.description}>
          We make cool games
        </p>

        <div className={styles.grid}>
          <a href="https://taroth9.itch.io/far-fetched" className={styles.card}>
            <h3>Far Fetched</h3>
            <p>Rescue your lost dog in this game that won first place in Ludum Dare 48!</p>
          </a>

          <a href="https://ldjam.com/events/ludum-dare/47/good-morning-beautiful-world" className={styles.card}>
            <h3>Good Morning, Beautiful World</h3>
            <p>Oh no, I'm stuck in a time loop... AGAIN AGAIN AGAIN AGAIN. Made for Ludum Dare 47.</p>
          </a>

          <a href="https://ldjam.com/events/ludum-dare/47/good-morning-beautiful-world" className={styles.card}>
            <h3>Will of the Wisp</h3>
            <p>You are a dryad hero in a huge world! For Ludum Dare 46 standards, anyways.</p>
          </a>
        </div>

        <p className={styles.description}>
          We are cool people
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h3>johnfn</h3>
            <p>What the... WHO LET ME INSIDE THIS GAME WEBSITE</p>
          </span>

          <span className={styles.card}>
            <h3>fawnblue</h3>
            <p>kazoo soloist</p>
          </span>

          <span className={styles.card}>
            <h3>LunacyEcho</h3>
            <p>Once wrote a nanowrimo novel during Ludum Dare</p>
          </span>

          <span className={styles.card}>
            <h3>Miyolophone</h3>
            <p><s>Once</s> Always wrote an album novel during Ludum Dare</p>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with 🆙 in SF, NY and Bulgaria
      </footer>
    </div>
  )
}
