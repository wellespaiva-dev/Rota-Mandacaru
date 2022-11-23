import {createContext, useEffect, useState} from "react";
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import { api } from "../services/api";

const LOCATION_TRACKING = 'location-tracking';

export const LocationTrackingContext = createContext();

export const LocationTrackingProvider = ({children}) => {

  const [location, setLocation] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [trips, setTrips]= useState([]);
  const [loadingTrips, setLoadingTrips] = useState(false);
  const [loadingVehicles, setLoadingVehicles] = useState(false);

  const getVehicles = () => {
    setLoadingVehicles(true)
    api.get('vehicles').then((resp) => {
      setVehicles(resp.data);
      setLoadingVehicles(false);
    }).catch(error => {
      console.log(error);
      setLoadingVehicles(false);
    })
  }

  const getTrips = () => {
    setLoadingTrips(true);;
    api.get('trips').then((resp) => {
      setTrips(resp.data)
      setLoadingTrips(false);
    }).catch(error => {
      console.log(error)
      setLoadingTrips(false);
    })
  }

  const startLocationTracking = async () => {

    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 0,
    });

    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING
    );

    setIsTracking(hasStarted);
  };

  const stopLocationTracking = async () => {

    await Location.stopLocationUpdatesAsync(LOCATION_TRACKING);

    setIsTracking(false);
  };

  const startLocation = () => {
    startLocationTracking();
  }

  useEffect(() => {
    TaskManager.defineTask(LOCATION_TRACKING, async ({data, error}) => {
      if (error) {
        setError(error);
        return;
      }
      const {locations} = data;
      setLocation(locations[0]);
    });
  }, []);

  return (
    <LocationTrackingContext.Provider value={{
      location,
      isTracking,
      error,
      startLocation,
      stopLocationTracking,
      getVehicles,
      getTrips,
      vehicles,
      trips,
      loadingTrips,
      loadingVehicles,
    }}>
      {children}
    </LocationTrackingContext.Provider>
  )
}