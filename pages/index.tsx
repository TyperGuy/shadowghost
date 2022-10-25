import type { NextPage } from "next";
import styles from "styles/Home.module.css";
import { Header } from "views/header";
import {Call2Action} from "views/call2action";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Call2Action/>
    </div>
  );
};

export default Home;
