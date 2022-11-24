import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const BottomBox = styled.View`
  z-index: 1;
  flex: 1;
  bottom: 0;
  position: absolute;
  align-items: flex-start;
  width: 100%;
  background-color: #FFF;
  padding: 24px 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const SeparatorItems = styled.View`
  height: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const SeparatorHorizontal = styled.View`
  width: 20px;
`;


export const AutonomyLabel = styled.Text`
  font-size: 18px;
  color: black;
`;

export const PercentLabel = styled.Text`
  font-size: 13px;
  color: #000000A6;
  text-align: center;
`;

export const Content = styled.View`
  width: 100%;
`

export const Label = styled.Text`
  font-size: 14px;
  color: #000000D9;
  text-align: left;
`;