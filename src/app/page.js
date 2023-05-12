import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title_card}>
        <h1>Trivia Game</h1>
        <div className={styles.options}>
          <div className={styles.button}>Start</div>
          <div className={styles.button}>How to Play</div>
        </div>
      </div>
      <p className={styles.credit}>Background Image by <a href="https://www.freepik.com/free-vector/gradient-question-mark-pattern-design_27257316.htm#query=trivia&position=0&from_view=keyword&track=sph">Freepik</a></p>
      <footer>
        Made by Saarah Peer
      </footer>
    </main>
  )
}
