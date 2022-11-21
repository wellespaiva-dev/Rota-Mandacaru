import Routes from './src/routes';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { LocationTrackingProvider } from './src/context/trackingLocationContext';

export default function App() {
  return (
    <>
      <ExpoStatusBar style='auto' />
      <LocationTrackingProvider>
        <Routes />
      </LocationTrackingProvider>
    </>
  );
}