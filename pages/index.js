import { useState } from "react";

import List from "../components/list/list";
import Title from "../components/title/title";

import Button from "../components/button/button";
import Counter from "../components/counter/counter";
import styles from "../styles/Home.module.css";
import PeopleList from "../components/people/peopleList";
import LogEffect from "../components/log-effect/logEffect";

export default function Home() {
  return (
    <div className={styles.container}>
      <Title customColor="blue">Awesome example</Title>
      <PeopleList />

      {/* <List />
      <Button
        onClick={() => {
          handleOnClick();
        }}
      >
        Click Me
      </Button>
      <br />
      <section style={{ backgroundColor: "#76c5f56e", padding: "2vw" }}>
        <Counter />
      </section> */}
    </div>
  );
}
