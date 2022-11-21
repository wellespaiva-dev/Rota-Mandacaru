import React, {useEffect, useState, useMemo} from 'react';
import * as Location from 'expo-location';
import LoadingView from '../../components/LoadingView';
import HeaderBack from '../../components/HeaderBack';
import Map from '../../components/Map';
import Button from '../../components/Button';
import TRIPS from '../../mock/trips.json'
import { BottomBox, SeparatorItems } from './styles';
const LOCATION_TRACKING = 'location-tracking';

const getTrip = (tripId) => (TRIPS[tripId - 1]);

const Home = ({navigation, route}) => {

  const [location, setLocation] = useState(null);
  const [isStarting, setIsStarting] = useState(false);
  const trip = useMemo(() => getTrip(route?.params?.trip), [route?.params?.trip]);

  // const startLocationTracking = async () => {

  //   await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
  //     accuracy: Location.Accuracy.Highest,
  //     timeInterval: 10000,
  //     distanceInterval: 0,
  //   });

  //   const hasStarted = await Location.hasStartedLocationUpdatesAsync(
  //     LOCATION_TRACKING
  //   );

  //   setLocation(hasStarted);
  //   setIsStarting(true);
  //   console.log('tracking started?', hasStarted);
  // };

  // useEffect(() => console.log(location), [location]);

  if (!trip) return <LoadingView />;

  return (
    <>
      <HeaderBack
        title={trip.label}
        onPress={() => navigation.goBack()} />
      <Map currentCoords={trip.start_coords} destinationCoords={trip.destination_coords} />
      <BottomBox>
        {/* <Button onPress={startLocationTracking}>Iniciar</Button> */}
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