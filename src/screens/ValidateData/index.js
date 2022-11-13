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
import Button from '../../components/Button';
import IconRight from '../../assets/images/right.svg';
import TRIPS from '../../mock/trips.json';
import VEHICLES from '../../mock/vehicles.json';

const ValidateData = ({navigation, route}) => {

  const params = route?.params;

  const getTripLabel = () => {
    if (TRIPS[params?.trip - 1]) return TRIPS[params?.trip - 1].label

    return 'Rota não encontrada.'
  }

  const getVehicleLabel = () => {
    if (VEHICLES[params?.Vehicle - 1]) return VEHICLES[params?.Vehicle - 1].label

    return 'Veículo não encontrado.'
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
          <RouteLabelText>{getVehicleLabel()}</RouteLabelText>
        </RouteLabel>
        <SeparatorItems />
        <SeparatorItems />
        <Label>Rota selecionada</Label>
        <SeparatorItems />
        <RouteLabel>
          <RouteLabelText>{getTripLabel()}</RouteLabelText>
        </RouteLabel>
        <SeparatorTitle />
        <Button 
          rightIcon={IconRight}
          onPress={() => navigation.navigate('Home', {...params})}
        >
          Ok, vamos lá!
        </Button>
        <SeparatorItems />
        <Button
          variant='outlined'
          color='black'
          onPress={() => navigation.navigate('SelectVehicle', {...params})}
        >
          Corrigir informações
        </Button>
      </FormContainer>
    </Container>
  )
}

export default ValidateData;