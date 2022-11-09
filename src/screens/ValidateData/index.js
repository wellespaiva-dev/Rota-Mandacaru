import React from 'react';
import {
  Container,
  FormContainer,
  SeparatorItems,
  SeparatorTitle,
  Title,
  SubTitle,
  ButtonContinue,
  ButtonText,
  ButtonBack,
  ButtonTextBack,
  Label,
  RouteLabel,
  RouteLabelText,
} from './styles';
import HeaderBack from '../../components/HeaderBack';
import IconRight from '../../assets/images/right.svg';

const ValidateData = ({navigation, route}) => {

  const params = route?.params;

  const getRoute = () => {
    if (params?.route === 'A') return 'Rota Apodi - Mossoró'
    if (params?.route === 'B') return 'Rota Apodi - UFERSA'
    if (params?.route === 'C') return 'Rota Apodi - Brisanet'

    return 'Rota não encontrada.'
  }

  return (
    <Container>
      <HeaderBack 
        title='Informações selecionadas' 
        onPress={() => navigation.goBack()} />
      <FormContainer>
        <SeparatorTitle />
        <Title>Quase lá!</Title>
        <SeparatorItems />
        <SubTitle>Para dá início a sua aventura, é preciso que você verifique se os dados de sua rota estão corretos.</SubTitle>
        <SeparatorTitle />
        <Label>Veículo selecionado</Label>
        <SeparatorItems />
        <RouteLabel>
          <RouteLabelText>{params?.Vehicle}</RouteLabelText>
        </RouteLabel>
        <SeparatorItems />
        <SeparatorItems />
        <Label>Rota selecionada</Label>
        <SeparatorItems />
        <RouteLabel>
          <RouteLabelText>{getRoute()}</RouteLabelText>
        </RouteLabel>
        <SeparatorTitle />
        <ButtonContinue 
          activeOpacity={0.4}
          onPress={() => navigation.navigate('Home', {...params})}
        >
          <ButtonText>Ok, vamos lá!</ButtonText>
          <IconRight />
        </ButtonContinue>
        <SeparatorItems />
        <ButtonBack activeOpacity={0.4} onPress={() => {}}>
          <ButtonTextBack>Corrigir informações</ButtonTextBack>
        </ButtonBack>
      </FormContainer>
    </Container>
  )
}

export default ValidateData;