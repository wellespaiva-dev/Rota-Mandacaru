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

const Items = [
  {
    label: 'Corolla 2017 XEI',
    value: 'Corolla 2017 XEI'
  },
  {
    label: 'Audi A4 2015',
    value: 'Audi A4 2015'
  },
  {
    label: 'Harley Davidson XL1200 CA',
    value: 'Harley Davidson XL1200 CA'
  },
]

const SelectVehicle = ({navigation}) => {

  const [selected, setSelected] = useState('');

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
        <Button 
          disabled={!selected} 
          onPress={() => navigation.navigate('SelectRoute', {Vehicle: selected})}
          rightIcon={IconRight}
        >
          Próximo
        </Button>
      </FormContainer>
    </Container>
  )
}

export default SelectVehicle;