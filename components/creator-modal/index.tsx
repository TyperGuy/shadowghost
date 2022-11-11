import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FC, useState } from "react";
import InputColor from "react-input-color";
import { BiCopyAlt as Copy } from "react-icons/bi";
import Styles from "./Modal.module.scss";

interface modalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const Creator = ({ isOpen, onOpen, onClose }: modalProps) => {
  const [offsetX, setOffsetX] = useState(125);
  const [offsetY, setOffsetY] = useState(125);
  const [blur, setBlur] = useState(125);
  const [spreed, setSpreed] = useState(125);
  const [color, setColor] = useState({});
  const toast = useToast();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Custom Box-Shadow</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" gap={10}>
            <Flex
              borderRadius={5}
              padding={5}
              boxShadow=" rgba(0, 0, 0, 0.15) 0px 2px 8px;"
            >
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                perspiciatis reiciendis voluptate, totam consequuntur quisquam
                eius, voluptatem fugiat dicta corrupti rerum. Magnam, inventore
                eos ea odio tenetur laudantium itaque voluptatem.
              </Text>
            </Flex>
            <Flex
              borderRadius={5}
              padding={"20px 4px"}
              direction="column"
              gap={16}
            >
              <Slider
                max={250}
                aria-label="slider-ex-6"
                onChange={(val) => setOffsetX(val)}
              >
                <SliderMark
                  value={offsetX}
                  textAlign="center"
                  bg="#222"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                  borderRadius={4}
                >
                  {offsetX}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg={"#222"} />
                </SliderTrack>
                <SliderThumb bg={"#222"} />
              </Slider>
              <Slider
                max={250}
                aria-label="slider-ex-6"
                onChange={(val) => setOffsetY(val)}
              >
                <SliderMark
                  value={offsetY}
                  textAlign="center"
                  bg="#222"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                  borderRadius={4}
                >
                  {offsetY}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg={"#222"} />
                </SliderTrack>
                <SliderThumb bg={"#222"} />
              </Slider>
              <Slider
                max={250}
                aria-label="slider-ex-6"
                onChange={(val) => setBlur(val)}
              >
                <SliderMark
                  value={blur}
                  textAlign="center"
                  bg="#222"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                  borderRadius={4}
                >
                  {blur}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg={"#222"} />
                </SliderTrack>
                <SliderThumb bg={"#222"} />
              </Slider>
              <Slider
                max={250}
                aria-label="slider-ex-6"
                onChange={(val) => setSpreed(val)}
              >
                <SliderMark
                  value={spreed}
                  textAlign="center"
                  bg="#222"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                  borderRadius={4}
                >
                  {spreed}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg={"#222"} />
                </SliderTrack>
                <SliderThumb bg={"#222"} />
              </Slider>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormLabel htmlFor="email-alerts" mb="0">
                  Turn Inset?
                </FormLabel>
                <Switch id="email-alerts" />
              </FormControl>
              <Flex
                width="100%"
                height="50px"
                align={"center"}
                paddingLeft={5}
                borderRadius={5}
                backgroundColor={color.rgba}
              >
                <InputColor
                  initialValue="#5e72e4"
                  onChange={setColor}
                  placement="right"
                />
              </Flex>
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
                bg="#fff"
              >
                <Copy color="#222" />
              </Flex>
            }
            className={Styles.copyButton}
            onClick={() =>
              toast({
                position: "bottom-left",
                render: () => (
                  <Box className={Styles.toast} color="#222" p={3} bg="#fff">
                    {`Copied to clipboard. You can now " CTR + V "`}
                  </Box>
                ),
              })
            }
          >
            {" "}
            Copy to clipboard
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
