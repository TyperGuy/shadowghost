import styled,{keyframes} from 'styled-components';


export const animation = keyframes `
 from{
  transform:translateY(10px);
  opacity:0;
 }
 to{
  transform:translateY(0);
  opacity:1;
 }
`

export const Container = styled.div `
  position: relative;
`
export const OptionContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background: #fff ;
  width: 200px;
  height: 200px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 2!important;
  border-radius: .5rem;
  left: -75px;
  animation: ${animation} .4s linear ;
  padding: 10px ;
  margin-top: 10px;
  &:before{
    content: "";
    left: 50%;
    position: absolute;
    height: 20px;
    margin-left: -10px;
    top: -8px;
    transform: rotate(135deg);
    width: 20px;
    background: #fff;
  }
`