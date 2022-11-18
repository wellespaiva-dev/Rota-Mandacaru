import React from "react";
import {Container, Title, ButtonBack} from './styles';
import IconBack from '../../assets/images/back.svg';

const HeaderBack = ({
  onPress = () => {}, 
  title = '', 
  isButtonBack = true,
}) => {

  const Back = IconBack;

  return (
    <Container>
      {isButtonBack && (
        <ButtonBack onPress={() => onPress()}>
          <Back />
        </ButtonBack>
      )}
      <Title>{title}</Title>
    </Container>
  )
}

export default HeaderBack;