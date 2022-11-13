import styled from "styled-components";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Title = styled.Text`
  padding: 30px 15px 15px 15px;
  font-size: 22px;
  color: black;
`;

export const ButtonBack = styled.TouchableOpacity`
  padding: 30px 15px 15px 15px;
  position: absolute;
  left: 10px;
`;