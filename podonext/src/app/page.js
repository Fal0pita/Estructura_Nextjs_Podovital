import Image from "next/image";
import styles from "./page.module.css";
import Customhome from "./components/home";

export default function Home() {
  return (
    <main className={styles.main}>
      <Customhome />
    </main>
  );
}
