import { Box, Button, Flex, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import type { NextPage } from "next";
import Styles from "./Call2Action.module.scss";
import {BiCopyAlt as Copy} from 'react-icons/bi';


export const Call2Action: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
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
      <Img className={Styles.img} src="/ghost.png"/>
     </div>
    </div>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Custom Box-Shadow</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={5}>
              <Flex borderRadius={5} padding={5} boxShadow=" rgba(0, 0, 0, 0.15) 0px 2px 8px;">
                <Text>
                  Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Quae perspiciatis reiciendis 
                  voluptate, totam consequuntur quisquam eius, 
                  voluptatem fugiat dicta corrupti rerum. Magnam, 
                  inventore eos ea odio tenetur laudantium itaque 
                  voluptatem.
                  Quae perspiciatis reiciendis 
                  voluptate, totam consequuntur quisquam eius, 
                  voluptatem fugiat dicta corrupti rerum. Magnam, 
                  inventore eos ea odio tenetur laudantium itaque 
                  voluptatem.
                </Text>
              </Flex>
              <Flex borderRadius={5} padding={5} boxShadow=" rgba(0, 0, 0, 0.15) 0px 2px 8px;">
                <Text>
                  Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Quae perspiciatis reiciendis 
                  voluptate, totam consequuntur quisquam eius, 
                  voluptatem fugiat dicta corrupti rerum. Magnam, 
                  inventore eos ea odio tenetur laudantium itaque 
                  voluptatem.
                  Quae perspiciatis reiciendis 
                  voluptate, totam consequuntur quisquam eius, 
                  voluptatem fugiat dicta corrupti rerum. Magnam, 
                  inventore eos ea odio tenetur laudantium itaque 
                  voluptatem.
                </Text>
              </Flex>
            </Flex>
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
                onClick={() =>
                  toast({
                    position: 'bottom-left',
                    render: () => (
                      <Box className={Styles.toast} color='#222' p={3} bg='#fff'>
                        {`Copied to clipboard. You can now " CTR + V "`}
                      </Box>
                    ),
                  })
                }
                > Copy to clipboard
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};


