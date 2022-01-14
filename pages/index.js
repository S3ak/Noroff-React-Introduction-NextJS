import { useState } from "react";

import styles from "../styles/Home.module.css";
import List from "../components/list/list";
import Title from "../components/title/title";

import Button from "../components/button/button";
import Counter from "../components/counter/counter";

export default function Home() {
  const [bob, setBob] = useState("bar");

  const handleOnClick = () => {
    setBob("Fifa 2022");
  };

  return (
    <div className={styles.container}>
      <Title customColor="blue">Awesome example</Title>
      <p>{bob}</p>
      <List />
      <Button
        onClick={() => {
          handleOnClick();
        }}
      >
        Click Me
      </Button>
      <br />

      <Counter />
    </div>
  );
}
