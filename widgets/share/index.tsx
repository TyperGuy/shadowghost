import type { NextPage } from "next";
import { useState } from "react";
import { Container, OptionContainer} from './Share.styles';
import {Text} from '@chakra-ui/react';


export const Share: NextPage = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
     <Container>
      <Text cursor="pointer" onClick={()=>setIsOpen(!isOpen)}>
        Share
      </Text>
     { isOpen&&
       <OptionContainer>
          <div>Algo assim</div>
          <div>Algo assim</div>
          <div>Algo assim</div>
       </OptionContainer>
     }
     </Container>
  );
};
