import type { NextPage } from "next";
import { useState } from "react";
import { Container, OptionContainer} from './Share.styles';
import {Flex, Heading, Text} from '@chakra-ui/react';

import {BsTwitter as Twitter,BsLinkedin as Linkedin,BsFacebook as Facebook} from "react-icons/bs";


const Medias = [
  {
    name : "Facebook",
    icon : <Facebook/>,
    color : "#1778F2",
    bgColor : "rgba(23,120,242,.1)"
  },
  {
    name : "Twitter",
    icon : <Twitter/>,
    color : "#1DA1F2",
    bgColor : "rgba(29, 161, 242,.1)"
  }
  ,
  {
    name : "Linkedin",
    icon : <Linkedin/>,
    color : "#0077B5",
    bgColor : "rgba(0, 119, 181,.1)"
  }
]

export const Share: NextPage = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
     <Container>
      <Text fontWeight={isOpen?"bold":""} cursor="pointer" onClick={()=>setIsOpen(!isOpen)}>
        Share
      </Text>
     { isOpen&&
       <OptionContainer>
          { 
            Medias.map(medias =>{
              return(
                <Flex cursor="pointer" key={medias.name} align="center" gap={3}>
                  <Flex bg={medias.bgColor} color={medias.color} justify="center" align="center" width="35px" height="35px"  borderRadius="md">
                    { 
                    medias.icon
                    }
                  </Flex>
                  <Heading size="sm"> {medias.name}</Heading>
              </Flex>
              )
            })
          }
       </OptionContainer>
     }
     </Container>
  );
};
