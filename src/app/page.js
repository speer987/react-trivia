'use client';
import styles from './page.module.css'
import Link from 'next/link'

function generateGridArray() {
    console.log(true);
    let defaultUrl = `https://opentdb.com/api.php?amount=1&type=multiple`
    let defaultUrlEasy = defaultUrl.concat(`&difficulty=easy`);
    let defaultUrlMed = defaultUrl.concat(`&difficulty=medium`);
    let defaultUrlHard = defaultUrl.concat(`&difficulty=hard`);

    let categories = [];
    let newCategory = 0;
    while (categories.length < 5){
        newCategory = Math.floor(Math.random() * 24 + 9);
        if(!categories.includes(newCategory)) {
            categories.push(newCategory);
        }
    }

    let question_grid = [];
    let hard_group = []
    for(let i = 0; i < 5; i++) {
        let tempDefaultUrlHard = defaultUrlHard.concat(`&category=${categories[i]}`);
        hard_group.push(tempDefaultUrlHard);
    }
    question_grid.push(hard_group);

    let med_group = []
    for(let i = 0; i < 5; i++) {
        let tempDefaultUrlMed = defaultUrlMed.concat(`&category=${categories[i]}`);
        med_group.push(tempDefaultUrlMed);
    }
    question_grid.push(med_group);

    let easy_group = []
    for(let i = 0; i < 5; i++) {
        let tempDefaultUrlEasy = defaultUrlEasy.concat(`&category=${categories[i]}`);
        easy_group.push(tempDefaultUrlEasy);
    }
    question_grid.push(easy_group);
}

export default function Home() {
  return (
    <main>
      <div className={styles.title_card}>
        <h1>React Trivia</h1>
        <div className={styles.options}>
          <Link href="/questions">
            <button type="button" onClick={generateGridArray}>Start</button>
          </Link>
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
