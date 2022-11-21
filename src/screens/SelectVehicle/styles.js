import styled from "styled-components";
import {Dimensions} from "react-native";

const {width} = Dimensions.get('window')


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FCFCFC66;
`;

export const FormContainer = styled.View`
  padding-horizontal: 15px;
  flex: 1;
  background-color: #FCFCFC66;
`;

export const SeparatorItems = styled.View`
  height: 10px;
`;

export const SeparatorTitle = styled.View`
  height: 40px;
`;


export const Title = styled.Text`
  font-size: 22px;
  color: black;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: rgba(0,0,0,65);
`;


export const ButtonContinue = styled.TouchableOpacity`
  background-color: ${props => props.selected ? '#83BF4F' : '#83BF4F99'};
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${width - 40}px;
  border-radius: 100px;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  margin-right: 10px;
`;