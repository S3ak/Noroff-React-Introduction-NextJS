import styles from "../styles/Home.module.css";
import MyComp from "../components/my-comp/my-comp";
import List from "../components/list/list";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Awesome example</div>
      <List />
    </div>
  );
}
