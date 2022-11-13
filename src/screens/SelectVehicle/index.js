import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import PickerStyle from '../../components/FormPicker/styles';
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
import IconPicker from '../../assets/images/PickerIcon.svg';
import IconRight from '../../assets/images/right.svg'
import VEHICLES from '../../mock/vehicles.json';

const SelectVehicle = ({navigation, route}) => {

  const routeParams = route.params;

  const [selected, setSelected] = useState(routeParams?.vehicle ?? null);

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
          onValueChange={(value) => {
            setSelected(value);
          }}
          items={VEHICLES}
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
          Icon={() => <IconPicker />}
        />
        <SeparatorTitle/>
        <IconCar />
        <SeparatorTitle />
        <Button 
          disabled={!selected} 
          onPress={() => navigation.navigate('SelectRoute', { ...routeParams, Vehicle: selected})}
          rightIcon={IconRight}
        >
          Próximo
        </Button>
      </FormContainer>
    </Container>
  )
}

export default SelectVehicle;