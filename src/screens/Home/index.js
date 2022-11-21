import React, {useMemo} from 'react';
import {useAndroidBackHandler} from "react-navigation-backhandler";
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LoadingView from '../../components/LoadingView';
import HeaderBack from '../../components/HeaderBack';
import Map from '../../components/Map';
import Button from '../../components/Button';
import TRIPS from '../../mock/trips.json'
import {BottomBox, SeparatorItems} from './styles';
import {useTrackingLocation} from '../../hooks/useTrackingLocation';

const getTrip = (tripId) => (TRIPS[tripId - 1]);

const Home = ({route}) => {

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  useAndroidBackHandler(() => {
    if (isFocused) {
      navigation.goBack();

      return true
    }

    return false;
  })

  const trip = useMemo(() => getTrip(route?.params?.trip), [route?.params?.trip]);
  const {location, isTracking, startLocation} = useTrackingLocation();

  if (!trip) return <LoadingView />;

  return (
    <>
      <HeaderBack
        title={trip.label}
        onPress={() => navigation.goBack()} />
      <Map currentCoords={isTracking && location ? location.coords : trip.start_coords} destinationCoords={trip.destination_coords} />
      <BottomBox>
        <Button onPress={startLocation}>Iniciar</Button>
        <SeparatorItems />
        <Button
          fullWidth={false}
          variant='outlined'
          color='black'
          onPress={() => navigation.goBack()}
        >
          Escolher outra rota
        </Button>
      </BottomBox>
    </>
  )
}

export default Home;