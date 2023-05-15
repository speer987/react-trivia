import "src/app/globals.css"
import styles from "src/app/page.module.css"
import Link from "next/link"

export default function Questions() {
    return (
    <main>
        <div className={styles.page}>
            <div className={`${styles.title_card} ${styles.title_wide}`}>
                <h2>Pick a Question</h2>
                <h3>Score: 0</h3>
                <div className={styles.top_right}>
                    <Link href="/manual"><button>How to Play</button></Link>
                    <Link href="/manual"><button>Scoreboard</button></Link>
                </div>
            </div>
                <form className={styles.temp2}>
                    <div className={styles.temp}>
                        <h2 className={`${styles.center} ${styles.white_text}`}>Category 1</h2>
                        <Link href="/question"><button>Category 1 Difficult Card</button></Link>
                        <button className={styles.fit}>Category 1 Medium Card</button>
                        <button className={styles.fit}>Category 1 Easy Card</button>
                    </div>
                    <div className={styles.temp}>
                        <h2 className={`${styles.center} ${styles.white_text}`}>Category 1</h2>
                        <button className={styles.fit}>Category 1 Difficult Card</button>
                        <button className={styles.fit}>Category 1 Medium Card</button>
                        <button className={styles.fit}>Category 1 Easy Card</button>
                    </div>
                    <div className={styles.temp}>
                        <h2 className={`${styles.center} ${styles.white_text}`}>Category 1</h2>
                        <button className={styles.fit}>Category 1 Difficult Card</button>
                        <button className={styles.fit}>Category 1 Medium Card</button>
                        <button className={styles.fit}>Category 1 Easy Card</button>
                    </div>
                    <div className={styles.temp}>
                        <h2 className={`${styles.center} ${styles.white_text}`}>Category 1</h2>
                        <button className={styles.fit}>Category 1 Difficult Card</button>
                        <button className={styles.fit}>Category 1 Medium Card</button>
                        <button className={styles.fit}>Category 1 Easy Card</button>
                    </div>
                    <div className={styles.temp}>
                        <h2 className={`${styles.center} ${styles.white_text}`}>Category 1</h2>
                        <button className={styles.fit}>Category 1 Difficult Card</button>
                        <button className={styles.fit}>Category 1 Medium Card</button>
                        <button className={styles.fit}>Category 1 Easy Card</button>
                    </div>
                </form>
            </div>
    </main>
    )
}

{/* 
                <container flex-dir: row>
                    <container flex-dir : column>
                        <div>
                        <div>
                        <div>
                        <div>
                        <div>
                    </container>
                    <container flex-dir : column>
                        <div>
                        <div>
                        <div>
                        <div>
                        <div>
                    </container>
                    <container flex-dir : column>
                        <div>
                        <div>
                        <div>
                        <div>
                        <div>
                    </container>
                <container>
                */}