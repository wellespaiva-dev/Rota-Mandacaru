import React, {useEffect, useMemo, useState} from 'react';
import {Dimensions} from 'react-native';
import {useAndroidBackHandler} from "react-navigation-backhandler";
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LoadingView from '../../components/LoadingView';
import HeaderBack from '../../components/HeaderBack';
import Map from '../../components/Map';
import Button from '../../components/Button';
import {BottomBox, SeparatorItems, Row, SeparatorHorizontal, AutonomyLabel, PercentLabel, Content, Label} from './styles';
import {useTrackingLocation} from '../../hooks/useTrackingLocation';
import ModalFinishRoute from '../../components/AlertCustom/FinishRoute';
import * as Progress from 'react-native-progress';



const {width} = Dimensions.get('window');

const Home = ({route}) => {

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const [distanceF, setDistanceF] = useState('');

  const [percent, setPercent] = useState(1);

  const {
    location, 
    isTracking, 
    startLocation, 
    stopLocationTracking, 
    trips,
    vehicles,
    posts,
  } = useTrackingLocation();

  const getTrip = (tripId) => (trips[tripId - 1]);

  const getVehicle = (vehiclepId) => (vehicles[vehiclepId - 1]);

  useAndroidBackHandler(() => {
    if (isFocused) {
      navigation.goBack();

      return true
    }

    return false;
  })

  const trip = useMemo(() => getTrip(route?.params?.trip), [route?.params?.trip]);

  const onModalPress = () => {
    stopLocationTracking()
    setVisible(false);
    navigation.navigate('SelectVehicle');
  }

  const calculationPercent = () => {
    const tank = getVehicle(route?.params?.Vehicle).tank;
    const performance = getVehicle(route?.params?.Vehicle).performance;
    const autonomy = (tank - (Number(distanceF) - Number(distance))) / performance;

    const Lc = (autonomy * performance) / 100;

    const PercentAux = (Lc * 100) / tank;

    const newPercent = percent - (PercentAux / 100);

    setPercent(newPercent);
  }

  const toFuel = () => {
    setPercent(1);
  }

  const getPercentColor = (value) => {
    if (value >= 0.75) {
      return '#5BD13D'
    }
    if (value >= 0.4) {
      return '#FFDC5F'
    }
    if (value >= 0.3) {
      return '#F15E2B';
    }
    
    return '#FF0000';
  }

  const finishRoute = () => {
    const finish = distance * 1000

    return finish <= 15
  }

  useEffect(() => {
    setDistanceF(distance);
  }, [])

  useEffect(() => {
    if (distance && finishRoute()) setVisible(true);
  }, [distance])

  useEffect(() => {
    setTimeout(() => calculationPercent(), 120000);
  }, [percent])

  if (!trip) return <LoadingView />;

  return (
    <>
      <ModalFinishRoute 
        visible={visible}
        setVisible={setVisible}
        onPress={() => onModalPress()}
        route={trip.label}
      />
      <HeaderBack
        title={trip.label}
        onPress={() => {
          stopLocationTracking()
          navigation.goBack()
          }} />
      <Map 
        currentCoords={isTracking && location ? location.coords : trip.start_coords} 
        destinationCoords={trip.destination_coords}
        setDistance={setDistance}
        setDuration={setDuration}
        posts={posts}
      />
      <BottomBox>
        {isTracking && <AutonomyLabel>{`${duration.toString().substring(0,5)} min (${distance.toString().substring(0,6)} Km)`}</AutonomyLabel>}
        {isTracking && (
          <>
            <SeparatorItems />
            <Content>
              <Label>Combustível do veículo</Label>
              <Progress.Bar 
                progress={percent}
                width={width - 40}
                height={12}
                borderRadius={8}
                color={getPercentColor(percent)}
                borderColor='#D9D9D9'
                style={{backgroundColor: '#D9D9D9'}}
              />
              <PercentLabel>{percent*100}%</PercentLabel>
            </Content>
            <SeparatorItems />
          </>
        )}
        {isTracking ? (
          <Button 
            fullWidth={false} 
            _width={`${100}px`} 
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
            <Button _width={`${150}px`} fullWidth={false} onPress={() => setVisible(true)}>Abastecer</Button>
          )}
        </Row>
      </BottomBox>
    </>
  )
}

export default Home;