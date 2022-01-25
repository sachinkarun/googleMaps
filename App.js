import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import MapScreen from './components/MapScreen';
import AuthScreen from './components/Auth';
import CurrLocation from './components/CurrLocation';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="CurrLocation" component={CurrLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;