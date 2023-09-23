import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useTrackingLocation} from '../../hooks/useTrackingLocation';
import RNPickerSelect from 'react-native-picker-select';
import PickerStyle from '../../components/FormPicker/styles';
import {useAndroidBackHandler} from "react-navigation-backhandler";
import {
  Container,
  FormContainer,
  SeparatorItems,
  SeparatorTitle,
  Title,
  SubTitle,
} from './styles';
import HeaderBack from '../../components/HeaderBack';
import Button from '../../components/Button';
import IconCar from '../../assets/images/car.svg';
import IconRight from '../../assets/images/right.svg'
import ExitApp from '../../components/AlertCustom/ExitApp';
import LoadingView from '../../components/LoadingView';

const SelectVehicle = ({route}) => {

  const routeParams = route.params;

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const {
    getVehicles, 
    getTrips, 
    loadingVehicles, 
    loadingTrips, 
    vehicles,
    getPosts
  } = useTrackingLocation();

  const [selected, setSelected] = useState(routeParams?.vehicle ?? null);
  const [visible, setVisible] = useState(false);

  useAndroidBackHandler(() => {
    if (isFocused) {
      setVisible(true);
      return true
    }

    return false;
  })

  useEffect(() => {
    getTrips()
    getVehicles()
    getPosts()
  }, [])

  return (
    <>
      {(loadingTrips || loadingVehicles) && (<LoadingView />)}
      <ExitApp
        visible={visible}
        setVisible={setVisible}
      />
      <Container>
        <HeaderBack title='Selecione o veículo' isButtonBack={false} />
        <FormContainer>
          <SeparatorTitle />
          <Title>Olá,</Title>
          <SeparatorItems />
          <SubTitle>Selecione o veículo que você deseja realizar sua rota e continue para o próximo passo.</SubTitle>
          <SeparatorTitle />
          <RNPickerSelect
            style={PickerStyle.styles}
            onValueChange={(value) => {
              setSelected(value);
            }}
            items={vehicles}
            value={selected}
            placeholder={{
              label: 'Selecione o veículo',
              value: null,
              color: '#000',
            }}
            textInputProps={{
              selection: {start: 0, end: 0},
              fontSize: 16,
              placeholderTextColor: '#000',
            }}
          />
          <SeparatorTitle/>
          <IconCar />
          <SeparatorTitle />
          <Button 
            disabled={!selected} 
            onPress={() => navigation.navigate('SelectRoute', {...routeParams, Vehicle: selected})}
            rightIcon={IconRight}
          >
            Próximo
          </Button>
        </FormContainer>
      </Container>
    </>
  )
}

export default SelectVehicle;