import React, {useEffect, useState, useRef} from 'react';
import {Dimensions} from 'react-native';
import {Container, Distance, Time, SeparatorItems} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE,} from 'react-native-maps';
import * as Location from 'expo-location';
import LoadingView from '../../components/LoadingView';
import MapViewDirections from 'react-native-maps-directions';

const {width, height} = Dimensions.get('window');


const Home = () => {

  const MapRef = useRef(null);

  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState(''); 

  const getLocation = async () => {
    setLocation(await Location.getCurrentPositionAsync({}));
  }

  useEffect(() => {
    getLocation()
  }, [])


  return (
    <Container>
      {location ? (
        <>
          <MapView 
            style={{width: width - 20, height: height / 1.3}}
            initialRegion={{latitude: location?.coords?.latitude , longitude: location?.coords?.longitude, latitudeDelta: Number(''), longitudeDelta: Number('')}}
            showsPointsOfInterest={true}
            provider={PROVIDER_GOOGLE}
            mapType='standard'
            ref={MapRef}
          >
            <Marker coordinate={{latitude: location?.coords?.latitude , longitude: location?.coords?.longitude}}/>
            <MapViewDirections
              origin={{latitude: location?.coords?.latitude , longitude: location?.coords?.longitude}}
              destination={{latitude: -6.1123308 , longitude: -38.2139587}}
              apikey="AIzaSyAeItCXKJvuDukHGqXtX6dC459PLoe2Bao"
              strokeWidth={3}
              onReady={(result => {
                setDistance(result?.distance)
                setTime(result?.duration);
                MapRef.current.fitToCoordinates(
                  result.coordinates, {
                    edgePadding: {
                      top: 50,
                      bottom: 50,
                      left: 50,
                      right: 50,
                    }
                  },
                )
              })}
            />
          </MapView>
          <SeparatorItems />
          <Distance>Distância: {distance}m</Distance>
          <SeparatorItems />
          <Time>Tempo estimado: {time}</Time>
        </>
      ) : (<LoadingView />)}
    </Container>
  )
}

export default Home;