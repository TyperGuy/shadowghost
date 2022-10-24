import type { NextPage } from "next";
import Styles from "./Header.module.scss";
import { Logo } from "components/logo";

export const Header: NextPage = () => {
  return (
    <div className={Styles.headerContainer}>
      <Logo />
    </div>
  );
};
