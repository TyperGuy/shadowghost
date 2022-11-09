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
import Styles from "./Call2Action.module.scss";
import InputColor from "react-input-color";
import { BiCopyAlt as Copy } from "react-icons/bi";
import { useState } from "react";

export const Call2Action: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);
  const [color, setColor] = useState({});
  const toast = useToast();
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <Flex direction="column" gap={10}>
            <Text maxW={378}>
              Are you looking for premade Shadows effects & easy way to create
              box-shadow for your user Interface? Well, We got a great message
              for you!
            </Text>
            <Flex gap={5} className={Styles.buttonContainer}>
              <Button className={Styles.button}> Expore existing</Button>
              <Button onClick={onOpen} className={Styles.button}>
                {" "}
                Eazy Create
              </Button>
            </Flex>
          </Flex>
          <Img className={Styles.img} src="/ghost.png" />
        </div>
      </div>
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
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  perspiciatis reiciendis voluptate, totam consequuntur quisquam
                  eius, voluptatem fugiat dicta corrupti rerum. Magnam,
                  inventore eos ea odio tenetur laudantium itaque voluptatem.
                </Text>
              </Flex>
              <Flex
                borderRadius={5}
                padding={"20px 4px"}
                direction="column"
                gap={16}
              >
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
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
    </>
  );
};
