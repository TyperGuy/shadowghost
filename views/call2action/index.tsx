import { Box, Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Styles from "./Call2Action.module.scss";


export const Call2Action: NextPage = () => {
  return (
    <div className={Styles.container}>
     <div className={Styles.innerContainer}>
      <Flex direction="column" gap={10}>
        <Text maxW={378}>
          Are you looking for blend mode background images & 
          beautiful background gradients for your User Interface?
        </Text>
        <Flex gap={5}className={Styles.buttonContainer}>
          <Button className={Styles.button}> Expore existing</Button>
          <Button className={Styles.button}> Eazy Create</Button>
        </Flex>
      </Flex>
     </div>
    </div>
  );
};
