import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Styles from "./Call2Action.module.scss";


export const Call2Action: NextPage = () => {
  return (
    <div className={Styles.container}>
     <div className={Styles.innerContainer}>
      <Flex direction="column" gap={10}>
        <Text maxW={378}>
        Are you looking for premade Shadows effects & easy way to 
        create box-shadow for your user Interface? Well, We got a great message for you!
        </Text>
        <Flex gap={5}className={Styles.buttonContainer}>
          <Button className={Styles.button}> Expore existing</Button>
          <Button className={Styles.button}> Eazy Create</Button>
        </Flex>
      </Flex>
      <Img className={Styles.img} src="/illustration.png"/>
     </div>
    </div>
  );
};
