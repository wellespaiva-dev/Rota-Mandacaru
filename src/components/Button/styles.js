import styled from "styled-components";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const COLOR = {
  primary: {
    main: '#83BF4F',
    dark: '#83BF4F99'
  },
  secondary: {
    main: '#FFDC5F',
    dark: '#FFDC5F99'
  },
  error: {
    main: '#B3261E',
    dark: '#B3261E99'
  },
  black: {
    main: '#000000',
    dark: '#00000099'
  },
  white: {
    main: '#FCFCFC',
    dark: '#FCFCFC99'
  },
}

const getColor = (selected, color) => selected ? COLOR[color].main : COLOR[color].dark;

export const ButtonLayout = styled.TouchableOpacity`
  background-color: ${({ selected, color, variant }) => variant === 'contained' ? getColor(selected, color) : null};
  border: ${({ selected, variant, color }) => variant === 'outlined' ? `solid 1px ${getColor(selected, color)}` : 'none'};
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
  width: ${width - 40}px;
  border-radius: 100px;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${({ variant }) => variant === 'contained' ? 'white' : 'black'};
  margin-right: 10px;
`;