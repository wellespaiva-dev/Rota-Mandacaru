import styled from "styled-components";
import {Dimensions} from "react-native";

const {width} = Dimensions.get('window')

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #FFFFFF;
  height: 64px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: black;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;