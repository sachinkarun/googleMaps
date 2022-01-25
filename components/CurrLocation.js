import React, { useState, useEffect } from 'react';
import { Platform, View, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapScreen from './MapScreen';

export default function CurrLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  var latit = "";
  var longit = "";
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);

    var lat = text.lastIndexOf("latitude") + 10;
    var spd = text.indexOf("speed") - 2;
    latit = parseFloat(text.substring(lat, spd));
    var long = text.lastIndexOf("longitude") + 11;
    var acc = text.indexOf("accuracy") - 2;
    longit = parseFloat(text.substring(long, acc));
  }

    if(latit.length === 0 && longit.length === 0){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator color='black' size='large' />
            </View>
        )
    }

    return (
        <MapScreen show={{latit, longit}} />
        );
    }