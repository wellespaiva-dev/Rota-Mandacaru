import React, {useEffect, useState, useMemo} from 'react';
import * as Location from 'expo-location';
import LoadingView from '../../components/LoadingView';
import HeaderBack from '../../components/HeaderBack';
import Map from '../../components/Map';
import TRIPS from '../../mock/trips.json'

const getTrip = (tripId) => (TRIPS[tripId - 1]);

const Home = ({navigation, route}) => {

  const [location, setLocation] = useState(null);
  const trip = useMemo(() => getTrip(route?.params?.trip), [route?.params?.trip]);

  const getLocation = async () => {
    setLocation(await Location.getCurrentPositionAsync({}));
    setLoading(false);
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
      <Map currentCoords={location.coords} destinationCoords={trip.coords} />
    </>
  )
}

export default Home;