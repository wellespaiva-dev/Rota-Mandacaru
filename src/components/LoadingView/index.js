import React from 'react';
import {ActivityIndicator, Dimensions, StatusBar} from 'react-native';

import {Container} from './styles';

const {height} = Dimensions.get('window');

const LoadingView = () => {
  return (
    <Container height={height + (StatusBar.currentHeight || 0)}>
      <ActivityIndicator size='large' color="#83BF4F" />
    </Container>
  );
};
export default LoadingView;