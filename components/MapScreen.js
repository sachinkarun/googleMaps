import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapScreen({show}) {
  const [pin, setPin] = React.useState({
    latitude: show.latit,
    longitude: show.longit
  })
  const [region, setRegion] = React.useState({
    latitude: show.latit,
    longitude: show.longit
  })

  return (
    <View style={styles.container}>

      <MapView style={styles.map} 
        initialRegion={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider="google"
        >
          <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}} />
          <Marker
            coordinate={{
              latitude: pin.latitude,
              longitude: pin.longitude
            }}
            draggable={true}
            onDragStart={(e) => {
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
              })
            }}
          >
              <Callout>
                <Text>I'm here</Text>
              </Callout>
            </Marker>
              <Circle center={pin} radius={1000} />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    backgroundColor: '#fff'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});