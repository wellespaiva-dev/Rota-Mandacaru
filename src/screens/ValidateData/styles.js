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

export const Label = styled.Text`
  font-size: 16px;
  color: #000000CC;
  text-align: left;
`;

export const RouteLabel = styled.View`
  height: 40px;
  width: ${width - 30}px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 10px;
  border-color: #EBEBEB;
  border-width: 1px;
`;

export const RouteLabelText = styled.Text`
  font-size: 14px;
  color: #000000A6;
`;