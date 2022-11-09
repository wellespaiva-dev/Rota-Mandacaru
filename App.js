import Routes from './src/routes';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {
  return (
    <>
      <ExpoStatusBar style='auto'/>
      <Routes />
    </>
  );
}