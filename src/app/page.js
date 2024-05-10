import Image from "next/image";
import styles from "./page.module.css";
import page from "./page.svg";

const text = "Kathleen Tillman - kathleen.tillman.0@gmail.com - more to come"

const Home = () => {
    return (<main className={styles.main}>
        <Image src={page} alt={text} width={300} height={300} />
    </main>)
}

export default Home;
