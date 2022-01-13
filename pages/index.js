import styles from "../styles/Home.module.css";
import List from "../components/list/list";
import Title from "../components/title/title";

export default function Home() {
  return (
    <div className={styles.container}>
      <Title customColor="blue">Awesome example</Title>
      <List />
    </div>
  );
}
