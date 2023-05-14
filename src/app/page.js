import styles from './page.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className={styles.title_card}>
        <h1>React Trivia</h1>
        <div className={styles.options}>
          <Link href="/questions"><button>Start</button></Link>
          <Link href="/manual"><button>How to Play</button></Link>
        </div>
      </div>
      <p className={styles.credit}>Background Image by <a href="https://www.freepik.com/free-vector/gradient-question-mark-pattern-design_27257316.htm#query=trivia&position=0&from_view=keyword&track=sph">Freepik</a></p>
      <footer>
        Made by Saarah Peer
      </footer>
    </main>
  )
}
