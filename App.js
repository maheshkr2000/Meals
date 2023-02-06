import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RestaurantsNavigator } from './src/components/navigation/restaurants.navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from './src/components/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Map} from './src/features/map/screens/map.screen';
import MapView from "react-native-maps";
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider} from './src/services/restaurants/restaurant.context'



const Tab =createBottomTabNavigator();




export default function App() {
  return (
  <>
  <LocationContextProvider>
  <RestaurantsContextProvider>
  <Navigation/>
</RestaurantsContextProvider>
</LocationContextProvider>
   <StatusBar style="auto"/>
  </>
  );
}

