import { Box, Button, Flex, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import Styles from "./Call2Action.module.scss";
import {BiCopyAlt as Copy} from 'react-icons/bi';


export const Call2Action: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <div className={Styles.container}>
     <div className={Styles.innerContainer}>
      <Flex direction="column" gap={10}>
        <Text maxW={378}>
        Are you looking for premade Shadows effects & easy way to 
        create box-shadow for your user Interface? Well, We got a great message for you!
        </Text>
        <Flex gap={5}className={Styles.buttonContainer}>
          <Button className={Styles.button}> Expore existing</Button>
          <Button onClick={onOpen} className={Styles.button}> Eazy Create</Button>
        </Flex>
      </Flex>
      <Img className={Styles.img} src="/illustration.png"/>
     </div>
    </div>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Custom Box-Shadow</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae perspiciatis reiciendis voluptate, totam consequuntur quisquam eius, voluptatem fugiat dicta corrupti rerum. Magnam, inventore eos ea odio tenetur laudantium itaque voluptatem.
          </ModalBody>

          <ModalFooter>
          <Button 
            leftIcon={
              <Flex 
                width="25px"
                height="25px" 
                borderRadius="50%" 
                justify="center" 
                align="center"  
                bg="#fff">
                  <Copy 
                    color="#222"/>
              </Flex>} 
                className={Styles.copyButton}
                > Copy to clipboard
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};


