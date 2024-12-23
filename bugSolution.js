// bug.js
import MapView from 'react-native-maps';

const MyMap = () => {
  return (
    <MapView style={{flex: 1}} initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
  );
};

export default MyMap;

// bugSolution.js
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MyMap = () => {
  return (
    <MapView provider={PROVIDER_GOOGLE} style={{flex: 1}} initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
  );
};

export default MyMap;