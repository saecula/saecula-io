import Image from "next/image";
import styles from "./page.module.css";
import intro from "./intro.svg";

const text = "Welcome! this is my personal site and it's under construction. for now you can find me at github.com/saecula or say hello at hi@saecula.io."

const Home = () => {
    return (<main className={styles.main}>
       <Image src={intro} alt={text} height={600} />
    </main>)
}

export default Home;
