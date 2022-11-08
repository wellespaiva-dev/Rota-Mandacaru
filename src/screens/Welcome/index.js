import React , {useEffect, useState} from 'react';
import {Container, ButtonInformation, Information} from './styles';

import * as Location from 'expo-location';

const Welcome = ({navigation}) => {

  const [statusPermission, setStatusPermission] = useState(false);

  const requestPermmisionLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status === 'granted') {
      setStatusPermission(true)
    }
  }
  
  useEffect(() => {
    requestPermmisionLocation()
  }, [Location]);

  return (
    <Container>
      <ButtonInformation onPress={() => statusPermission ? navigation.navigate('Home') : requestPermmisionLocation()} >
        <Information>Rota Mandacaru</Information>
      </ButtonInformation>
    </Container>
  )
}

export default Welcome;