import "src/app/globals.css"
import styles from "src/app/page.module.css"

export default function Question(){
    return (
    <main>
        <div className={`${styles.margin} ${styles.center}`}>
            <h2 className={styles.white_text}>Category Name</h2>
            <div className={styles.title_card}>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?</h3>
            </div>
            <div className={styles.max_width}>
                <form className={styles.temp2}>
                        <div className={`${styles.flex_column} ${styles.half_width}`}>
                            <button className={styles.fit}>Answer 1</button>
                            <button className={styles.fit}>Answer 1</button>
                        </div>
                        <div className={`${styles.flex_column} ${styles.half_width}`}>
                            <button className={styles.fit}>Answer 1</button>
                            <button className={styles.fit}>Answer 1</button>
                        </div>
                </form>
            </div>
        </div>
    </main>
    );
}