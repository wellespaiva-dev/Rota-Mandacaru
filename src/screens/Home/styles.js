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
  height: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const SeparatorHorizontal = styled.View`
  width: 20px;
`;