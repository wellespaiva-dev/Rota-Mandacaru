import React, {useEffect, useState, useRef} from 'react';
import {Dimensions} from 'react-native';
import {Container, Distance, Time, SeparatorItems} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import LoadingView from '../../components/LoadingView';
import MapViewDirections from 'react-native-maps-directions';

const {width, height} = Dimensions.get('window');


const Home = () => {

  const MapRef = useRef(null);

  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState('');

  const getLocation = async () => {
    setLocation(await Location.getCurrentPositionAsync({}));
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true)
    getLocation()
  }, [])


  return (
    <Container>
      {loading ? (<LoadingView />) : (
         <>
          <MapView 
            style={{width: width - 20, height: height / 1.3}}
            initialRegion={{latitude: Number(location?.coords?.latitude || 0) , longitude: Number(location?.coords?.longitude || 0), latitudeDelta: Number('0'), longitudeDelta: Number('0')}}
            showsPointsOfInterest={true}
            provider={PROVIDER_GOOGLE}
            mapType='standard'
            ref={MapRef}
          >
            <Marker coordinate={{latitude: Number(location?.coords?.latitude || 0) , longitude: Number(location?.coords?.longitude || 0), latitudeDelta: Number('0'), longitudeDelta: Number('0')}} />
            <MapViewDirections
              origin={{latitude: Number(location?.coords?.latitude || 0) , longitude: Number(location?.coords?.longitude || 0)}}
              destination={{latitude: Number('-6.1109938'), longitude: Number('-38.2053013')}}
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
          <Distance>Distância: {distance.toString().substring(0,4)}m</Distance>
          <SeparatorItems />
          <Time>Tempo estimado: {time.toString().substring(0,4)}</Time>
        </>
      )}
    </Container>
  )
}

export default Home;