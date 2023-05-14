import "src/app/globals.css"
import styles from "src/app/page.module.css"

export default function Questions() {
    return (
    <main>
        <div className={styles.page}>
            <div className={`${styles.title_card} ${styles.title_wide}`}>
                <h2>Pick a Question</h2>
                <h3>Score: 0</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.card_container}>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 1</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 2</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 3</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 4</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 5</p>
                </div>
                <div className={styles.card_container}>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 1</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 2</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 3</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 4</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 5</p>
                </div>
                <div className={styles.card_container}>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 1</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 2</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 3</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 4</p>
                    <p className={`${styles.title_card} ${styles.question_card}`}>Card 5</p>
                </div>
            </div>
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