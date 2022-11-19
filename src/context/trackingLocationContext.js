import {createContext, useEffect, useState} from "react";
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TRACKING = 'location-tracking';

export const LocationTrackingContext = createContext();

export const LocationTrackingProvider = ({children}) => {

  const [location, setLocation] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState(null);

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
      startLocation
    }}>
      {children}
    </LocationTrackingContext.Provider>
  )
}