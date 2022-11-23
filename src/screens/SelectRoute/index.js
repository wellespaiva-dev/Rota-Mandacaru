import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';
import {useAndroidBackHandler} from "react-navigation-backhandler";
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  Container,
  FormContainer,
  SeparatorItems,
  SeparatorTitle,
  Title,
  SubTitle,
  Row,
  RouteLabel,
  RouteLabelText,
} from './styles';
import HeaderBack from '../../components/HeaderBack';
import IconRight from '../../assets/images/right.svg';
import Button from '../../components/Button';
import {useTrackingLocation} from '../../hooks/useTrackingLocation';

const SelectRoute = ({route}) => {

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const routeParams = route?.params;

  const [selected, setSelected] = useState(routeParams.trip ?? null);

  const {
    trips
  } = useTrackingLocation();

  useAndroidBackHandler(() => {
    if (isFocused) {
      navigation.goBack();

      return true
    }

    return false;
  })

  return (
    <Container>
      <HeaderBack
        title='Selecione a rota'
        onPress={() => navigation.goBack()} />
      <FormContainer>
        <SeparatorTitle />
        <Title>Boa escolha!</Title>
        <SeparatorItems />
        <SubTitle>Você selecionou o veículo desejado, agora precisa selecionar qual rota a ser realizada.</SubTitle>
        <SeparatorItems />
        {trips.map((trip) => (
          <Row key={trip.value}>
            <Checkbox
              style={{borderRadius: 15, width: 25, height: 25}}
              color='#83BF4F'
              value={selected === trip.value}
              onValueChange={(value) => setSelected(value ? trip.value : null)}
            />
            <RouteLabel>
              <RouteLabelText>{trip.label}</RouteLabelText>
            </RouteLabel>
          </Row>
        ))}
        <SeparatorTitle />
        <Button
          disabled={!selected}
          onPress={() => navigation.navigate('ValidateData', {...routeParams, trip: selected})}
          rightIcon={IconRight}
        >
          Próximo
        </Button>
        <SeparatorItems />
        <Button
          variant='outlined'
          color='black'
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>
      </FormContainer>
    </Container>
  )
}

export default SelectRoute;