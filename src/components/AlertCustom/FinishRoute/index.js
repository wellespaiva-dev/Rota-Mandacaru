import React from "react";
import {Modal} from "react-native";

/// Styles
import {
  Container,
  ContainerInside,
  SeparatorItems,
  Title,
  Information,
} from './styles';

/// Icons
import IconSucess from '../../../assets/images/check.svg';
import Button from "../../Button";


const ModalFinishRoute = ({
  visible = false, 
  setVisible = () => {},
  route = 'X',
  note = '10',
  onPress = () => {}
}) => {

  const destino = route.split('-');

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)} 
    >
      <Container>
        <ContainerInside>
          <IconSucess />
          <SeparatorItems />
          <Title>Parabéns!</Title>
          <SeparatorItems />
          <Information>{`Você chegou no destino${destino[1]} e os alunos receberam a pontuação ${note}!`}</Information>
          <SeparatorItems />
          <Button 
            onPress={onPress} 
            fullWidth={false} 
            _width={`${247}px`}
          >
            Voltar ao início
          </Button>
        </ContainerInside>
      </Container>
    </Modal>
  )
}

export default ModalFinishRoute;