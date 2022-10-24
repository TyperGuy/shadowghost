import type { NextPage } from "next";
import styles from "styles/Home.module.css";
import { Header } from "views/header";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Header />
    </div>
  );
};

export default Home;
