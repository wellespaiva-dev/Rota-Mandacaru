import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
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
  Row,
  RouteLabel,
  RouteLabelText,
} from './styles';
import HeaderBack from '../../components/HeaderBack';
import IconRight from '../../assets/images/right.svg'

const Items = [
  {
    label: 'Corolla 2017 XEI',
    value: 'Corolla'
  },
  {
    label: 'Audi A4 2015',
    value: 'Audi'
  },
  {
    label: 'Harley Davidson XL1200 CA',
    value: 'Harley'
  },
]

const SelectRoute = ({navigation}) => {

  const [rotaA, setRotaA] = useState(false);
  const [rotaB, setRotaB] = useState(false);
  const [rotaC, setRotaC] = useState(false);

  const ToogleRotaA = (value) => {
    setRotaA(value)
    setRotaB(false)
    setRotaC(false)
  }

  const ToogleRotaB = (value) => {
    setRotaA(false)
    setRotaB(value)
    setRotaC(false)
  }

  const ToogleRotaC = (value) => {
    setRotaA(false)
    setRotaB(false)
    setRotaC(value)
  }

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
        <SeparatorTitle />
        <Row>
          <Checkbox
            style={{borderRadius: 15, width: 25, height: 25}}
            color='#83BF4F'
            value={rotaA}
            onValueChange={(value) => ToogleRotaA(value)}
          />
          <RouteLabel>
            <RouteLabelText>Rota Apodi - Mossoró</RouteLabelText>
          </RouteLabel>
        </Row>
        <SeparatorItems />
        <Row>
          <Checkbox
            style={{borderRadius: 15, width: 25, height: 25}}
            color='#83BF4F'
            value={rotaB}
            onValueChange={(value) => ToogleRotaB(value)}
          />
          <RouteLabel>
            <RouteLabelText>Rota Apodi - UFERSA</RouteLabelText>
          </RouteLabel>
        </Row>
        <SeparatorItems />
        <Row>
          <Checkbox
            style={{borderRadius: 15, width: 25, height: 25}}
            color='#83BF4F'
            value={rotaC}
            onValueChange={(value) => ToogleRotaC(value)}
          />
          <RouteLabel>
            <RouteLabelText>Rota Apodi - Brisanet</RouteLabelText>
          </RouteLabel>
        </Row>
        <SeparatorTitle />
        <ButtonContinue 
          activeOpacity={0.4}
          onPress={() => navigation.navigate('Home')}
        >
          <ButtonText>Próximo</ButtonText>
          <IconRight />
        </ButtonContinue>
        <SeparatorItems />
        <ButtonBack>
          <ButtonTextBack>Voltar</ButtonTextBack>
        </ButtonBack>
      </FormContainer>
    </Container>
  )
}

export default SelectRoute;