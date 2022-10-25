import type { NextPage } from "next";
import Styles from "./Header.module.scss";
import { Logo } from "components/logo";
import Link from "next/link";
import {Text } from "@chakra-ui/react";

export const Header: NextPage = () => {
  return (
    <div className={Styles.headerContainer}>
     <div className={Styles.nav}>
      <Logo />
      <Link href="/about">
        <a>
          <Text>About us</Text>
        </a>
      </Link>
     </div>
    </div>
  );
};
