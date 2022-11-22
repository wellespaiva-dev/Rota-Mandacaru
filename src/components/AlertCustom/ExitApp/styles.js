import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #00000080;
  justify-content: center;
  align-items: center;
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerInside = styled.View`
  width: 70%;
  min-height: 180px;
  border-radius: 2px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 24px;
  justify-content: center;
  align-items: center;
`

export const SeparatorItems = styled.View`
  height: 20px;
`;

export const Information = styled.Text`
  font-size: 15px;
  color: #000000A6;
`;

export const Button = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-size: 15px;
  color: #83BF4F;
`;

export const TextButton2 = styled.Text`
  font-size: 15px;
  color: #000000A6;
`;