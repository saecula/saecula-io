import Image from "next/image";
import styles from "./page.module.css";
import page from "./page2.svg";

const text = "Welcome! this is my personal site and it's under construction. for now you can find me at github.com/saecula or say hello at hi@saecula.io."

const Home = () => {
    return (<main className={styles.main}>
\        <Image src={page} alt={text} height={700} />
    </main>)
}

export default Home;
