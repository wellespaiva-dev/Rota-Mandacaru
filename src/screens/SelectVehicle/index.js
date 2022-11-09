import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import RNPickerSelect from 'react-native-picker-select';
import PickerStyle from '../../components/FormPicker/styles';
import {
  Container,
  FormContainer,
  SeparatorItems,
  SeparatorTitle,
  Title,
  SubTitle,
  ButtonContinue,
  ButtonText,
} from './styles';
import HeaderBack from '../../components/HeaderBack';
import IconCar from '../../assets/images/car.svg';
import IconPicker from '../../assets/images/PickerIcon.svg';
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

const SelectVehicle = ({navigation}) => {

  const [statusPermission, setStatusPermission] = useState(false);
  const [selected, setSelected] = useState('');

  console.log(selected)

  const requestPermmisionLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status === 'granted') {
      setStatusPermission(true)
    }
  }
  
  useEffect(() => {
    requestPermmisionLocation()
  }, [Location]);

  return (
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
          onValueChange={(value) => setSelected(value)}
          items={Items}
          value={selected}
          placeholder={{
            label: 'Selecione o veículo',
            value: '',
            color: '#000',
          }}
          textInputProps={{
            selection: {start: 0, end: 0},
            fontSize: 16,
            placeholderTextColor: '#000',
          }}
          Icon={() => <IconPicker />}
        />
        <SeparatorTitle/>
        <IconCar />
        <SeparatorTitle />
        <ButtonContinue 
          activeOpacity={selected ? 0.4 : 1} 
          selected={selected} 
          onPress={() => selected ? navigation.navigate('Home') : null}
        >
          <ButtonText>Próximo</ButtonText>
          <IconRight />
        </ButtonContinue>
      </FormContainer>
    </Container>
  )
}

export default SelectVehicle;