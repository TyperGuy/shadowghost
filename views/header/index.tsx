import type { NextPage } from "next";
import Styles from "./Header.module.scss";
import { Logo } from "components/logo";
import Link from "next/link";
import {Flex, Text } from "@chakra-ui/react";

export const Header: NextPage = () => {
  return (
    <div className={Styles.headerContainer}>
     <div className={Styles.nav}>
      <Logo />
      <Flex gap={4}>
        <Text>Share</Text>
        <Link href="/about">
          <a>
            <Text>About us</Text>
          </a>
        </Link>
      </Flex>
     </div>
    </div>
  );
};
