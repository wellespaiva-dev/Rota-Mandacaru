import React, {useRef} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = ({currentCoords, destinationCoords, onReady}) => {

  const MapRef = useRef(null);

  return (
    <MapView
      style={StyleSheet.absoluteFill}
      initialRegion={{
        latitude: currentCoords.latitude,
        longitude: currentCoords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      showsPointsOfInterest={false}
      provider={PROVIDER_GOOGLE}
      mapType='standard'
      ref={MapRef}
    >
      <Marker
        coordinate={{latitude: currentCoords.latitude, longitude: currentCoords.longitude}}
        style={{
          transform: [{
            rotate: !currentCoords?.heading ? '0deg' : `${currentCoords?.heading}deg`
          }]
        }}
      />
      <Marker coordinate={{latitude: destinationCoords.latitude, longitude: destinationCoords.longitude}} />
      <MapViewDirections
        origin={{latitude: currentCoords.latitude, longitude: currentCoords.longitude}}
        destination={{latitude: destinationCoords.latitude, longitude: destinationCoords.longitude}}
        apikey="AIzaSyAeItCXKJvuDukHGqXtX6dC459PLoe2Bao"
        strokeWidth={3}
        strokeColor="blue"
        onReady={(result) => {
          MapRef.current.fitToCoordinates(
            result.coordinates,
            {
              edgePadding: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50,
              }
            }
          );
          onReady && onReady();
        }}
      />
    </MapView>
  )
}

export default Map;