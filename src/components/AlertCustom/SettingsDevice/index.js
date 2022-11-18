import React from "react";
import {Modal, BackHandler} from "react-native";

/// Styles
import {
  Container,
  ContainerInside,
  SeparatorItems,
  Title,
  Information,
  Button,
  TextButton,
  TextButton2
} from './styles';

/// Icons
import IconDevice from '../../../assets/images/Device.svg';


const ModalSettingsDevice = ({
  visible = false, 
  setVisible = () => {}, 
  information = '', 
  onPress = () => {},
  type = '1',
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
          <Title>Localização</Title>
          <SeparatorItems />
          <Information>{information}</Information>
          <SeparatorItems />
          <Button onPress={() => {
            onPress()
            BackHandler.exitApp()
            }}>
            <TextButton>{type === '1' ? 'Ativar localização.': 'Mudar permissões.'}</TextButton>
          </Button>
          <SeparatorItems />
          <Button onPress={() => {
            BackHandler.exitApp()
          }}>
            <TextButton2>Não, obrigado!</TextButton2>
          </Button>
        </ContainerInside>
      </Container>
    </Modal>
  )
}

export default ModalSettingsDevice;