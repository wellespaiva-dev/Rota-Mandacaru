import React from "react";
import {Modal, BackHandler} from "react-native";

/// Styles
import {
  Container,
  ContainerInside,
  SeparatorItems,
  Row,
  Information,
  Button,
  TextButton,
  TextButton2
} from './styles';

/// Icons
import IconDevice from '../../../assets/images/Device.svg';


const ExitApp = ({
  visible = false, 
  setVisible = () => {},
}) => {

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)} 
    >
      <Container>
        <ContainerInside>
          <IconDevice />
          <SeparatorItems />
          <Information>Deseja realmente sair do aplicativo?</Information>
          <SeparatorItems />
          <Row>
            <Button onPress={() => {
              setVisible(false);
              BackHandler.exitApp()
            }}>
              <TextButton>Sim</TextButton>
            </Button>
            <Button onPress={() => setVisible(false)}>
              <TextButton2>Não</TextButton2>
            </Button>
          </Row>
        </ContainerInside>
      </Container>
    </Modal>
  )
}

export default ExitApp;