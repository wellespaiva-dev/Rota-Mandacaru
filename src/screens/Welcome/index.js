import React, { useEffect, useState, useCallback } from 'react';
import { BackHandler, Linking, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Container } from './styles';

import * as Location from 'expo-location';

import ModalSettingsDevice from '../../components/AlertCustom/SettingsDevice';

const Welcome = ({ navigation }) => {

  const isFocused = useIsFocused();

  const [visible, setVisible] = useState(false);
  const [information, setInformation] = useState('');
  const [type, setType] = useState('1');
  const [refleshScreen, setRefleshScreen] = useState(0);

  const requestPermmisionLocation = async () => {

    // const {status: foregroundPermission} = await Location.requestForegroundPermissionsAsync();
    const {status: backgroundPermission} = await Location.requestBackgroundPermissionsAsync();

    if (backgroundPermission === 'granted') {
      setVisible(false);
      navigation.navigate('SelectVehicle');
    } else {
      setType('2');
      setInformation('Para fazer uma boa utilização do app, é importante que o app tenha acesso a sua localização. Mude as permisões nas configurações do app.')
      setVisible(true);
    }
  }

  const verifyActivedLocation = async () => {

    const statusAux = await Location.hasServicesEnabledAsync();

    if (statusAux) {

      setVisible(false);
      requestPermmisionLocation();
    } else {

      setType('1');
      setInformation('Para fazer uma boa utilização do app, é importante que sua localização esteja ativada. Ative a localização do seu dispositivo.')
      setVisible(true);
    }
  }

  const getOnPress = async () => {
    if (type === '1') {
      await Linking.sendIntent("android.settings.SETTINGS");
      //  await Linking.openURL("App-prefs:root=General");
    } else if (type === '2') {
      await Linking.openSettings();
      // await Linking.openURL("app-settings:");
    }

    await Linking.sendIntent("android.settings.SETTINGS");
    // await Linking.openURL("App-prefs:root=General");
  }

  useEffect(() => {
    if (isFocused) {
      verifyActivedLocation()
    }
    setTimeout(() => {setRefleshScreen(refleshScreen + 1) }, 2000);
  }, [isFocused, refleshScreen]);


  return (
    <>
      <ModalSettingsDevice
        visible={visible}
        setVisible={setVisible}
        information={information}
        onPress={() => getOnPress()}
        type={type}
      />
      <Container />
    </>
  )
}

export default Welcome;