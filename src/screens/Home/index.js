import React, {useMemo, useState} from 'react';
import {useAndroidBackHandler} from "react-navigation-backhandler";
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LoadingView from '../../components/LoadingView';
import HeaderBack from '../../components/HeaderBack';
import Map from '../../components/Map';
import Button from '../../components/Button';
import TRIPS from '../../mock/trips.json'
import {BottomBox, SeparatorItems, Row, SeparatorHorizontal} from './styles';
import {useTrackingLocation} from '../../hooks/useTrackingLocation';
import ModalFinishRoute from '../../components/AlertCustom/FinishRoute';

const Home = ({route}) => {

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const {
    location, 
    isTracking, 
    startLocation, 
    stopLocationTracking, 
    trips
  } = useTrackingLocation();

  const getTrip = (tripId) => (trips[tripId - 1]);

  useAndroidBackHandler(() => {
    if (isFocused) {
      navigation.goBack();

      return true
    }

    return false;
  })

  const trip = useMemo(() => getTrip(route?.params?.trip), [route?.params?.trip]);

  const onModalPress = () => {
    // stopLocationTracking()
    navigation.navigate('SelectVehicle');
    setVisible(false);
  }

  if (!trip) return <LoadingView />;

  return (
    <>
      <ModalFinishRoute 
        visible={visible}
        setVisible={setVisible}
        onPress={() => onModalPress()}
      />
      <HeaderBack
        title={trip.label}
        onPress={() => {
          stopLocationTracking()
          navigation.goBack()
          }} />
      <Map currentCoords={isTracking && location ? location.coords : trip.start_coords} destinationCoords={trip.destination_coords} />
      <BottomBox>
        {isTracking ? (
          <Button 
            fullWidth={false} 
            _width={100} 
            color='error'
            onPress={stopLocationTracking}
          >
            Sair
         </Button>
        ) : (
          <Button onPress={startLocation}>Iniciar</Button>
        )}
        <SeparatorItems />
        <Row>
          <Button
            fullWidth={false}
            variant='outlined'
            color='black'
            onPress={() => navigation.goBack()}
          >
            Escolher outra rota
          </Button>
          <SeparatorHorizontal />
          {isTracking && (
            <Button _width={150} fullWidth={false} onPress={() => {}}>Abastecer</Button>
          )}
        </Row>
      </BottomBox>
    </>
  )
}

export default Home;