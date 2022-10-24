import type { NextPage } from "next";
import Image from "next/image";
import Styles from "./Logo.module.scss";

export const Logo: NextPage = () => {
  return (
    <>
      <div className={Styles.phone}>
        <Image
          alt="shadowghost logo"
          width={25}
          height={33}
          src="/fav_icon.png"
        />
      </div>
      <div className={Styles.web}>
        <Image alt="shadowghost logo" width={166} height={33} src="/logo.svg" />
      </div>
    </>
  );
};
