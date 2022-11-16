import React, {useEffect, useState, useMemo} from 'react';
import * as Location from 'expo-location';
import LoadingView from '../../components/LoadingView';
import HeaderBack from '../../components/HeaderBack';
import Map from '../../components/Map';
import Button from '../../components/Button';
import TRIPS from '../../mock/trips.json'
import { BottomBox, SeparatorItems } from './styles';

const getTrip = (tripId) => (TRIPS[tripId - 1]);

const Home = ({navigation, route}) => {

  const [location, setLocation] = useState(null);
  const [isStarting, setIsStarting] = useState(false);
  const trip = useMemo(() => getTrip(route?.params?.trip), [route?.params?.trip]);

  const getLocation = async () => {
    setLocation(await Location.getCurrentPositionAsync({}));
  }

  useEffect(() => {
    getLocation();
  }, [])

  if (!location || !trip) return <LoadingView />;

  return (
    <>
      <HeaderBack
        title={trip.label}
        onPress={() => navigation.goBack()} />
      <Map heading={location.coords.heading} currentCoords={isStarting ? location.coords : trip.start_coords} destinationCoords={trip.destination_coords} />
      <BottomBox>
        <Button onPress={() => setIsStarting(true)}>Iniciar</Button>
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